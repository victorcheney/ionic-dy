import { Injectable } from '@angular/core';
import cheerio from 'cheerio';

@Injectable({
  providedIn: 'root'
})
export class CheerioService {

  constructor() { }

  getHref(s, m) {
    if (s.includes("//")) {
      return "https:" + s;
    } else {
      return m + s;
    }
  }

  // 解析首页数据
  parseHomepageData(html, URL) {

    try {
      const $ = cheerio.load(html);

      // 轮播数据
      const banner = $(".focusList>li")
        .map((i, item) => {
          return {
            id: $(item).find("a").attr("href"),
            cover: this.getHref(
              $(item).find("img").attr("src"),
              URL
            ),
            name: $(item).find(".sTxt").text().replace(/\[|\]/g, "")
          };
        })
        .get();

      const list = index => {
        const data = $(".all_tab>.list_tab_img").eq(index).find("li")
          .map((i, item) => {
            return {
              id: $(item).find("a").attr("href"),
              cover: this.getHref(
                $(item).find("img").attr("src"),
                URL
              ),
              name: $(item).find("a").attr("title"),
              title: $(item).find(".title").text(),
              score: $(item).find(".score").text()
            };
          })
          .get();
        return data;
      };

      const datas = {
        solling: {
          name: "轮播图",
          list: banner
        },
        movie: {
          name: "电影",
          list: list(0)
        },
        tv: {
          name: "电视剧",
          list: list(1)
        },
        comic: {
          name: "动漫",
          list: list(2)
        },
        variety: {
          name: "娱乐",
          list: list(3)
        }
      };

      return datas;

    } catch (err) {
    }

  }

  // 解析详情页数据
  parseDetail(html, coverURL='https://www.kankanwu.com', playUrl='https://m.kankanwu.com', id) {
    try {
      const $ = cheerio.load(html);
      const MoviePlayUrls = $('#detail-list .play-list').eq(0).children('a').map((i, el) => {
        return ({
          "id": 'play_' + i,
          "index": i,
          "name": $(el).text(),
          "playUrl": playUrl + $(el).attr('href'),
        })
      }).get();
      const RelateList = $('#con_latest_1 .img-list li').map((i, el) => {
        return ({
          "id": $(el).find('.play-img').attr('href'),
          "cover": this.getHref($(el).find('img').attr('src'), coverURL),
          "name": $(el).find('h3').text(),
          "movieTitle": $(el).find('.text').text(),
        })
      }).get();
      const getTags = (index) => info.eq(index).find('a').filter((i, el) => $(el).text().length > 0).map((i, el) => $(el).text()).get().join(' ');
      const movieInfo = $('#detail-box');
      const info = movieInfo.find('.info dl');
      const Introduction =
        ` 主演：${getTags(0)}<br>
        导演：${getTags(5)}<br>
        简介：${$('#detail-intro').text()}`

      const data = {
        "moviePlayUrls": MoviePlayUrls,
        "id": id,
        "dbid": 0,
        "name": movieInfo.find('h1').text(),
        "movieTitle": info.eq(1).find('span').text(),
        "cover": this.getHref(movieInfo.find('.detail-pic img').attr('src'), coverURL),
        "tags": getTags(2),
        "introduction": Introduction,
        "releaseDate": info.eq(6).find('span').text(),
        "score": 0,
        //"UpdateTime": "2018-09-25T10:58:25",
        "relateList": RelateList,
      }

      return data;
    }
    catch (err) {
    }
  }

  // 解析列表页数据
  parsePageList(html) {
    try {
      const $ = cheerio.load(html);

      // 标题
      const titles = $('.modo_title').map((i, eletment) => {
        const el = $(eletment);
        return {
          name: el.find('h2 > a').attr('title'),
          url: el.find('h2 > a').attr('href'),
          moreUrl: el.find('.more a').attr('href')
        }
      })
      
      // 列表
      const datas = $('.main .all_tab .list_tab_img').map((i, el) => {
        const ul = $(el);
        const list = ul.find('li').map((j, el) => {
          return {
            name: $(el).find('a').attr('title'),
            id: $(el).find('a').attr('href'),
            label: $(el).find('lable[class="title"]').text(),
            cover: $(el).find('img').attr('src'),
          }
        })
        return list;
      })

      const resultList = titles.map((i, item) => {
        item.list = datas[i].splice(0, datas[i].length);

        return item;
      });

      return resultList.splice(0, resultList.length);
      
    }
    catch(err) {
    }
  }
}
