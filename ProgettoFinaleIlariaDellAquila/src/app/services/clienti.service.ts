import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../classes/cliente';
import { Clienti } from '../interfaces/clienti';

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
}
