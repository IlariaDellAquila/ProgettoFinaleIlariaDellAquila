import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DettagliClientiComponent } from './dettagli-clienti/dettagli-clienti.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { AddClientiComponent } from './add-clienti/add-clienti.component';
import { ModificaComponent } from './modifica/modifica.component';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { ModificaFatturaComponent } from './modifica-fattura/modifica-fattura.component';
import { AddFattureComponent } from './add-fatture/add-fatture.component';
import { AddComuneComponent } from './add-comune/add-comune.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableClientiComponent,
    HomeComponent,
    DettagliClientiComponent,
    AddClientiComponent,
    ModificaComponent,
    TableFattureComponent,
    DettagliFattureComponent,
    ModificaFatturaComponent,
    AddFattureComponent,
    AddComuneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
