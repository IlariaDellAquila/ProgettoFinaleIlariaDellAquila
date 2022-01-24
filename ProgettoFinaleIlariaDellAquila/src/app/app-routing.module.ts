import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'clienti',
    component: TableClientiComponent
  },
  {
    path:'clienti/:id/dettagli',
    component: TableClientiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
