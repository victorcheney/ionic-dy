import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import cheerio  from 'cheerio';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _this: this;
  WEBM: 'https://m.kankanwu.com/';

  constructor(private http: Http) {

  }

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

          resolve(banner);
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
}
