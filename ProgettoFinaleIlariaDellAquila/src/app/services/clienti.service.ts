import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../classes/cliente';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { Provincia } from '../classes/provincia';
import { Clienti } from '../interfaces/clienti';
import { Comuni } from '../interfaces/comuni';
import { Fatture } from '../interfaces/fatture';
import { Province } from '../interfaces/province';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

 //tenantID ='fe_0621';
 //bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNCwiZXhwIjoxNjQzOTA1MTI0fQ.Dv1-_r1eTnKKt8Dd2-vbtodaxf6vqFzcQKwKxcX8JsTcVWk8IrD3XURJYZYtBc35lL4U9X8aSAdICbUxwSCxHg';
 //headers = new HttpHeaders();

  constructor(private http: HttpClient) { 
    //this.headers = this.headers
    //                           .set("Authorization", this.bearerToken)
      //                         .set("X-TENANT-ID", this.tenantID)
  }

  getAllClienti() {
    //return this.http.get<Clienti>(environment.serverAdress + 'api/clienti?page=0&size=20&sort=id,ASC', {headers: this.headers});
   return this.http.get<Clienti>(environment.serverAdress + 'api/clienti?page=0&size=20&sort=id,DESC')
  }

  getClienteById(id: number){
    return this.http.get<Cliente>(environment.serverAdress + 'api/clienti/' + id)
  }
  getTipiClienti() {
    return this.http.get<string[]>(environment.serverAdress + 'api/clienti/tipicliente')
  }

  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(environment.serverAdress + 'api/clienti', cliente)
  }

  updateCliente(cliente: Cliente){
    return this.http.put<Cliente>(environment.serverAdress + 'api/clienti/' + cliente.id, cliente)
  }

  removeCliente(cliente: Cliente) {
    return this.http.delete(environment.serverAdress + 'api/clienti/' + cliente.id)
  }

  getAllComuni() {
    return this.http.get<Comuni>(environment.serverAdress + 'api/comuni?page=0&size=20&sort=id,DESC')
  }
  getAllProvince() {
    return this.http.get<Province>(environment.serverAdress + 'api/province?page=0&size=20&sort=id,DESC')
  }

  createComune(comune: Comune){
    return this.http.post<Comune>(environment.serverAdress + 'api/comuni', comune)
  }
  createProvincia(provincia: Provincia){
    return this.http.post<Provincia>(environment.serverAdress + 'api/province', provincia)
  }
  
  getByCliente(id: number) {
    return this.http.get<Fatture>(environment.serverAdress + 'api/fatture/cliente/'+ id +'?page=0&size=20&sort=id,DESC')
    }
}
