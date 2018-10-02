import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
    data: {
      hideToolbar: true
    }
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      hideToolbar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
