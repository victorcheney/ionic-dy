import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DyHttpService } from '../../providers/http.service'
import { HttpService1 } from '../../providers/http.service.1'

@Component({
  selector: 'app-pagelists',
  templateUrl: './pagelists.page.html',
  styleUrls: ['./pagelists.page.scss']
})
export class PagelistsPage implements OnInit {

  types: any = {
    movie: {
      name: '电影',
      value: 'dy'
    },
    tv: {
      name: '电视剧',
      value: 'dsj'
    },
    comic: {
      name: '动漫',
      value: 'Animation'
    },
    variety: {
      name: '综艺',
      value: 'Arts'
    }
  };
  routerType: string;
  currentName: string;
  dataLists: any;
  // params = { pageSize: 25, pageIndex: 1, type: '', status: '', trea: '', plot: '', year: '', orderBy: 'hits' }
  params = { type: ''}

  constructor(private routeInfor: ActivatedRoute, private httpService: HttpService1) {
    this.routerType = this.routeInfor.snapshot.params['type'];
    this.currentName = this.types[this.routerType].name;
    this.params.type =  this.types[this.routerType].value;
  }

  ngOnInit() {
    this.httpService.fetchPageList(this.params)
      .then(data => {
        this.dataLists = data;
      })
  }

}
