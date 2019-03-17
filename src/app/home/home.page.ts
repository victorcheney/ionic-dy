import { Component } from '@angular/core';
import { DyHttpService } from '../../providers/http.service';
import { HttpService1 } from '../../providers/http.service.1';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  homedatas: any;

  public navs = [
    {
      id: 'home',
      text: '首页',
      href: '',
      icon: ''
    },
    {
      id: 'movie',
      text: '电影',
      href: '',
      icon: 'film'
    },
    {
      id: 'tv',
      text: '电视剧',
      href: '',
      icon: 'tv',
      data: []
    },
    {
      id: 'comic',
      text: '动漫',
      href: '',
      icon: 'gift',
      data: []
    },
    {
      id: 'variety',
      text: '综艺',
      href: '',
      icon: 'flame',
      data: []
    },
  ];

  homeTabs: any;
  private tabIndex: number = 0;
  URLM: string = '/api';
  bannerData: any;
  constructor(private httpService: DyHttpService, private httpService1: HttpService1) {
    this.fetchHomeData();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // test
    /* this.httpService1.fetchHomeData()
    .then(resp => {
      this.homedatas = resp;
        this.bannerData = this.homedatas.solling.list

        this.navs[1]['data'] = this.homedatas.movie.list;
        this.navs[2].data = this.homedatas.tv.list;
        this.navs[3].data = this.homedatas.comic.list;
        this.navs[4].data = this.homedatas.variety.list;

        this.homeTabs = JSON.parse(JSON.stringify(this.navs))
        this.homeTabs.splice(0, 1);
    })
    .catch(error => {
      alert(`111:${JSON.stringify(error)}`)
    }) */
  }

  fetchHomeData() {
    this.httpService.fetchHomeData()
      .then(resp => {

        this.homedatas = resp;
        this.bannerData = this.homedatas.solling.list

        this.navs[1]['data'] = this.homedatas.movie.list;
        this.navs[2].data = this.homedatas.tv.list;
        this.navs[3].data = this.homedatas.comic.list;
        this.navs[4].data = this.homedatas.variety.list;

        this.homeTabs = JSON.parse(JSON.stringify(this.navs))
        this.homeTabs.splice(0, 1);
      })
  }

  toggleTabs(index: number) {
    this.tabIndex = index;
  }

  getKeys(item) {
    return Object.keys(item);
  }
}
