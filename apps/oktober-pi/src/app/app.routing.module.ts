import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leds',
  },
  {
    path: 'leds',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: ':index',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
