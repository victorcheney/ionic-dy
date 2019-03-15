import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.scss'],
})
export class CarditemComponent implements OnInit {
  @Input() cardData: any;

  constructor() { }

  ngOnInit() {}

}
