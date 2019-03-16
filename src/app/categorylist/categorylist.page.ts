import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService1 } from '../../providers/http.service.1'

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {

  type: string;
  currentName: string = '列表';
  params = { type: ''};
  dataLists: any;

  constructor(private routeInfo: ActivatedRoute, private httpService: HttpService1) { 

    this.type = this.routeInfo.snapshot.params['type'];
    // this.currentName = this.routeInfo.snapshot.params['name'];
    this.params.type = this.type;debugger
  }

  ngOnInit() {

    this.httpService.fetchPageList(this.params)
      .then(data => {
        this.dataLists = data;
      })

  }

}
