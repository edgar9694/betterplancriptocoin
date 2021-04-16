import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailCoinComponent } from './components/detail-coin/detail-coin.component';
import { ListCoinComponent } from './components/list-coin/list-coin.component';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'coins',
        component: ListCoinComponent
      },
      {
        path: 'coins/detail/:id',
        component: DetailCoinComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
