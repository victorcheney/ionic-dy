import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  activeRoute: any = '/home';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();

    // 监听路由变化
    this.router.events
      /* .pipe(
        filter((event) => event instanceof NavigationEnd)
      ) */
      .subscribe((event: NavigationEnd) => {
        //do something
        if (event.url) {
          this.activeRoute = event.url;
          console.log(this.activeRoute);
        }
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
