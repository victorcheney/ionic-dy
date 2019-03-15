import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagelistsPage } from './pagelists.page';
import { CardmoduleModule } from '../components/cardmodule/cardmodule.module';


const routes: Routes = [
  {
    path: '',
    component: PagelistsPage
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
  declarations: [PagelistsPage]
})
export class PagelistsPageModule {}
