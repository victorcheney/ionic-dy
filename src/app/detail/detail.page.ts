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
  imgUrl = 'http://iph.href.lu/80x100';
  image;
  loading;
  constructor(private httpService: HttpService,
    private routeInfor: ActivatedRoute,
    private sanitization: DomSanitizer,
    private loadingController: LoadingController) {

    // this.loading = this.presentLoading();
    this.id = this.routeInfor.snapshot.params['id'];
    this.httpService.fetchDetail(this.id)
      .then(data => {
        this.detailInfo = data;
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

}
