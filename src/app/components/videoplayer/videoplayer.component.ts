import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { HttpService } from '../../../providers/http.service';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent implements OnInit {

  @Input() seletedindex: number;
  @Input() videolist: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.playlist = this.videolist.map(item => {
      return {
        title: item.name,
        src: item.playUrl,
        type: 'video/mp4'
      }
    });

    this.onClickPlaylistItem(this.playlist[this.seletedindex], this.seletedindex);
  }

  playlist: Array<IMedia> = [];
  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;
  actionPlayUrl: string;


  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;

    this.getPlayUrl(this.currentItem.src)
      .then(resp => {
        debugger
        this.currentItem.src = JSON.stringify(resp);
      })
      .catch(err => {

      });
  }

  async getPlayUrl(url: string) {
    const tempUrl = url.split('com')[1];

    return this.httpService.fetchPlayUrl(`/play${tempUrl}`);

  }
}
