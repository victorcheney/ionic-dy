import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../providers/http.service'

@Component({
  selector: 'app-pagelists',
  templateUrl: './pagelists.page.html',
  styleUrls: ['./pagelists.page.scss'],
})
export class PagelistsPage implements OnInit {

  types: any = {
    movie: {
      name: '电影',
      value: 'movie'
    },
    tv: {
      name: '电视剧',
      value: 'tv'
    },
    comic: {
      name: '动漫',
      value: 'comic'
    },
    variety: {
      name: '综艺',
      value: 'variety'
    }
  };
  routerType: string;
  currentName: string;
  dataLists: any;
  params = { pageSize: 25, pageIndex: 1, type: '', status: '', trea: '', plot: '', year: '', orderBy: 'hits' }

  constructor(private routeInfor: ActivatedRoute, private httpService: HttpService) {
    this.routerType = this.routeInfor.snapshot.params['type'];
    this.currentName = this.types[this.routerType].name;
    this.params.type =  this.routerType;
  }

  ngOnInit() {
    this.httpService.fetchPageList(this.params)
      .then(data => {
        this.dataLists = data;
      })
  }

}
