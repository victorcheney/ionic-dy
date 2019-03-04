import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import cheerio from 'cheerio';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _this: this;
  WEBM: 'https://m.kankanwu.com/';
  WEB: 'https://kankanwu.com/';

  constructor(private http: Http) {

  }

  // 获取首页数据
  fetchHomeData(url: string, params: any) {
    return new Promise((resolve, reject) => {
      this.http.get(url, { search: params })
        // .map(res => res.json())
        .subscribe(data => {
          const $ = cheerio.load(data.text());

          // 轮播数据
          const banner = $('.focusList>li').map((i, item) => {
            return ({
              "id": $(item).find('a').attr('href'),
              "cover": this.getHref($(item).find('img').attr('src'), 'https://m.kankanwu.com/'),
              "name": $(item).find('.sTxt').text().replace(/\[|\]/g, ''),
            })
          }).get();

          const list = (index) => {
            const data = $('.all_tab>.list_tab_img').eq(index).find('li')
              .map((i, item) => {
                return ({
                  "id": $(item).find('a').attr('href'),
                  "cover": this.getHref($(item).find('img').attr('src'), 'https://m.kankanwu.com/'),
                  "name": $(item).find('a').attr('title'),
                  "title": $(item).find('.title').text(),
                  "score": $(item).find('.score').text(),
                })
              }).get();
            return data;
          }

          const datas = {
            solling: {
              name: '轮播图',
              list: banner
            },
            movie: {
              name: '电影',
              list: list(0)
            },
            tv: {
              name: '电视剧',
              list: list(1)
            },
            comic: {
              name: '动漫',
              list: list(2)
            },
            variety: {
              name: '娱乐',
              list: list(3)
            },
          }

          resolve(datas);
        }, err => {
          reject(err);
        })
    });
  }

  getHref(s, m) {
    if (s.includes('//')) {
      return 'https:' + s;
    } else {
      return m + s;
    }
  }

  // 获取影片详情
  fetchDetail(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`/details${id}`)
        .subscribe(resp => {
          const $ = cheerio.load(resp.text());
          const MoviePlayUrls = $('#detail-list .play-list').eq(0).children('a').map((i, el) => {
            return ({
              "id": 'play_' + i,
              "index": i,
              "name": $(el).text(),
              "playUrl": 'https://m.kankanwu.com' + $(el).attr('href'),
            })
          }).get();
          const RelateList = $('#con_latest_1 .img-list li').map((i, el) => {
            return ({
              "id": $(el).find('.play-img').attr('href'),
              "cover": this.getHref($(el).find('img').attr('src'), 'https://kankanwu.com'),
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
            "cover": this.getHref(movieInfo.find('.detail-pic img').attr('src'), 'https://kankanwu.com'),
            "tags": getTags(2),
            "introduction": Introduction,
            "releaseDate": info.eq(6).find('span').text(),
            "score": 0,
            //"UpdateTime": "2018-09-25T10:58:25",
            "relateList": RelateList,
          }
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  // 获取视频地址
  fetchPlayUrl(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url, {})
      .subscribe(resp => {

        const $ = cheerio.load(resp.text());
        let url = $('.playerbox iframe').attr('src').split('=')[1];
        resolve(url);
      }, err => {
        reject(err);
      })
    })
  }


}
