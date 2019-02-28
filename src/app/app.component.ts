import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['style.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: '首页',
      url: '/home',
      icon: 'home'
    },
    {
      title: '历史记录',
      url: '/history',
      icon: 'time'
    },
    {
      title: '收藏',
      url: '/collection',
      icon: 'heart-empty'
    },
    {
      title: '主题颜色',
      url: '/theme',
      icon: 'color-palette'
    }/* ,
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    } */
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
