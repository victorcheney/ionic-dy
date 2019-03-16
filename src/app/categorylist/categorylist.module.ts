import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategorylistPage } from './categorylist.page';
import { CardmoduleModule } from '../components/cardmodule/cardmodule.module';

const routes: Routes = [
  {
    path: '',
    component: CategorylistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CardmoduleModule
  ],
  declarations: [CategorylistPage]
})
export class CategorylistPageModule {}
