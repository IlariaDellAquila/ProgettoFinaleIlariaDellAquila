import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientiComponent } from './add-clienti/add-clienti.component';
import { DettagliClientiComponent } from './dettagli-clienti/dettagli-clienti.component';
import { HomeComponent } from './home/home.component';
import { ModificaComponent } from './modifica/modifica.component';
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
    path:'aggiungiClienti',
    component: AddClientiComponent
  },
  {
    path:'clienti/:id/dettagli',
    component: DettagliClientiComponent
  },
  {
    path:'clienti/:id/modifica',
    component: ModificaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
