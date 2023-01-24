import { WeightComponent } from './pages/weight/weight.component';
import { HistoryComponent } from './pages/history/history.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch : 'full'
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'history',
    component : HistoryComponent
  },
  {
    path : 'weight',
    component : WeightComponent
  },
  {
    path : '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
