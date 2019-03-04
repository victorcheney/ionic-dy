import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../providers/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private id;
  detailInfo: any = {};
  image;
  loading;
  movieListLength: number = 0;
  playUrl: string;
  actionPlayUrl: string;
  selIndex: number = 0;
  
  constructor(private httpService: HttpService,
    private routeInfor: ActivatedRoute,
    private sanitization: DomSanitizer,
    private loadingController: LoadingController) {

    // this.loading = this.presentLoading();
    this.id = this.routeInfor.snapshot.params['id'];
    this.httpService.fetchDetail(this.id)
      .then(data => {
        this.detailInfo = data;
        
        if(this.detailInfo.moviePlayUrls) {
          this.movieListLength = this.detailInfo.moviePlayUrls.length;
          this.playUrl = this.detailInfo.moviePlayUrls[0].playUrl; // 默认
        }

        this.image = this.sanitization.bypassSecurityTrustStyle(`url(${this.detailInfo.cover})`);

      })
      .catch(error => {

      });
  }

  ngOnInit() {


  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // this.loading.dismiss();
    
  }

  /* async presentLoading() {
    const loading = await this.loadingController.create({
      message: '加载中...'
    });
    await loading.present();
  } */


  videoPlay(playurl: any, index: number) {

    this.playUrl = playurl;
    this.selIndex = index;

    // let tempUrl = this.playUrl.split('com')[1];

    // this.httpService.fetchPlayUrl(`/play${tempUrl}`)
    // .then(resp => {
    //   this.actionPlayUrl = JSON.stringify(resp);
    // })
    // .catch(err => {

    // });

    // https://m.kankanwu.com/Action/darenwuzhongguobanlaoshou/player-0-1.html

  }
}
