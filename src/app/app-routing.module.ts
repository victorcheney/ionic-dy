import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'history',
    loadChildren: './history/history.module#HistoryPageModule'
  },
  {
    path: 'collection',
    loadChildren: './collection/collection.module#CollectionPageModule'
  },
  {
    path: 'theme',
    loadChildren: './theme/theme.module#ThemePageModule'
  },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },

  /* ,
    {
      path: 'list',
      loadChildren: './list/list.module#ListPageModule'
    } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
