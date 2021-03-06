import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeSliderComponent } from '../components/home-slider/home-slider.component';
import { CardmoduleModule } from '../components/cardmodule/cardmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),

    CardmoduleModule
  ],
  declarations: [HomePage, HomeSliderComponent]
})
export class HomePageModule {}
