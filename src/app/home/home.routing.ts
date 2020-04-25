import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
];

export const HomeRouter = RouterModule.forChild(routes);
