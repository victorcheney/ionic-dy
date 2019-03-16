import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CarditemComponent } from '../carditem/carditem.component';



@NgModule({
  declarations: [CarditemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CarditemComponent
  ]
})
export class CardmoduleModule { }
