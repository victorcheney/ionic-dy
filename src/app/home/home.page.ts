import { Component } from '@angular/core';

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
  constructor() {
  }

  toggleTabs(index: number) {
    this.tabIndex = index;
  }
}
