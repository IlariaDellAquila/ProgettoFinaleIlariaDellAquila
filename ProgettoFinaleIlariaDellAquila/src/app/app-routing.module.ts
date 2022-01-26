import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientiComponent } from './add-clienti/add-clienti.component';
import { DettagliClientiComponent } from './dettagli-clienti/dettagli-clienti.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { HomeComponent } from './home/home.component';
import { ModificaFatturaComponent } from './modifica-fattura/modifica-fattura.component';
import { ModificaComponent } from './modifica/modifica.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';
import { TableFattureComponent } from './table-fatture/table-fatture.component';

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
  {
    path:'fatture',
    component: TableFattureComponent
  },
  {
    path:'fatture/:id/dettagli',
    component: DettagliFattureComponent
  },
  {
    path:'fatture/:id/modifica',
    component: ModificaFatturaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
