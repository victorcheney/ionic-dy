import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import cheerio from "cheerio";
import { HTTP } from "@ionic-native/http/ngx";
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { CheerioService } from './cheerio.service';

@Injectable({
  providedIn: "root"
})
export class HttpService1 {
  // _this: this;
  WEBM: string = 'https://m.kankanwu.com';
  WEB: string = 'https://www.kankanwu.com';

  // dev
  // WEBM: string = "";
  // WEB: string = "";

  constructor(private http: HTTP, private dialogs: Dialogs, private cheerioService: CheerioService) { }

  // 获取首页数据
  fetchHomeData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.WEBM, {}, {})
        .then(resp => {
          const html = resp.data;

          resolve(this.cheerioService.parseHomepageData(html, this.WEBM));
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getHref(s, m) {
    if (s.includes("//")) {
      return "https:" + s;
    } else {
      return m + s;
    }
  }

  // 获取影片详情
  fetchDetail(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.WEB + `/${id}`, {}, {})
        .then(resp => {
          const html = resp.data;

          resolve(this.cheerioService.parseDetail(html, this.WEB, this.WEBM, id));

        }, err => {
          reject(err);
        })
    });
  }

  // 获取视频地址
  fetchPlayUrl(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.WEBM + `/${url}`, {}, {})
        .then(resp => {
          const data = resp.data;
          const $ = cheerio.load(data);
          let url = $('.playerbox iframe').attr('src').split('=')[1];
          resolve(url);
        }, err => {
          reject(err);
        })
    })
  }

  // 获取视频列表
  fetchPageList({ type = '' }) {
    const mapType = {
      movie: 1,
      tv: 2,
      comic: 3,
      variety: 4,
    }

    return new Promise((resolve, reject) => {
      this.http.get(this.WEBM + `/${type}/index.html`, {}, {})
      .then(resp => {

        const html = resp.data;

        resolve(this.cheerioService.parsePageList(html));        

      })
      .catch(err => {
        reject(err);
      })
    })

  }

  // // 搜索
  // search(searchKey) {
  //   let pageSize = 25, pageIndex = 1;
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.WEBM + `/search/index.php?s=vod-search-wd-海王.html`)
  //     .subscribe(resp => {
  //       const $ = cheerio.load(resp.text());
  //       const getInfo = (info, i) => info.find('p').eq(i).find('a').map((i, el) => $(el).text()).get().join(' ');
  //       const data = $('#resize_list li').map((i, el) => {
  //         const video = $(el).find('a');
  //         const info = $(el).find('.list_info');
  //         return ({
  //           "id": video.attr('href'),
  //           "name": video.attr('title'),
  //           "cover": this.getHref(video.find('img').attr('src'), 'https://www.kankanwu.com/'),
  //           "info": {
  //             "type": getInfo(info, 1),
  //             "art": getInfo(info, 2),
  //             "status": info.find('p').eq(3).text(),
  //             "time": info.find('p').eq(4).text(),
  //           }
  //         })
  //       }).get()
  //       const isEnd = pageIndex > $('.ui-vpages span').text();

  //       resolve({
  //         data: data,
  //         isend: isEnd
  //       });
  //     }, err => {
  //       reject(err);
  //     })
  //   })
  // }
}
