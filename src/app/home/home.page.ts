import { Component } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private navs = [
    {
      text: '首页',
      href: ''
    },
    {
      text: '电影',
      href: ''
    },
    {
      text: '电视剧',
      href: ''
    },
    {
      text: '动漫',
      href: ''
    },
    {
      text: '综艺',
      href: ''
    },
  ];
  private tabIndex: number = 0;
  URLM: string = '/api';
  bannerData: any = []; // 轮播数据
  constructor(private httpService: HttpService) {
    this.fetchHomeData(this.URLM, {});
  }

  fetchHomeData(url:string, params:any) {
    this.httpService.fetchHomeData(url, params)
    .then(resp => {

      this.bannerData = resp;

    })
  }

  toggleTabs(index: number) {
    this.tabIndex = index;
  }
}
