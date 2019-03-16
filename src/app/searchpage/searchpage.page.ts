import { Component, OnInit } from '@angular/core';
import { DyHttpService } from '../../providers/http.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
  providers: [ DyHttpService ]
})
export class SearchpagePage implements OnInit {

  searchQuery: string;
  searchResult: any;
  historys: any = [
    {
      text: '海王'
    },
    {
      text: '火影忍者'
    }];

  constructor(private httpService: DyHttpService) {
    this.searchQuery = '海王';
  }

  ngOnInit() {
  }

  getItems(searchQuery) {
    if (!searchQuery) {
      this.fetchSearchData('');
    } else {
      this.fetchSearchData(searchQuery);
    }
  }

  // 调用搜索接口
  fetchSearchData(searchKey) {

    this.httpService.search(searchKey)
      .then(data => {
        // debugger
        this.searchResult = data;
      })
      .catch(err => {

      });
  }

  // 选中历史记录
  selectHistoryItem(item) {
    this.searchQuery = item;
  }

}
