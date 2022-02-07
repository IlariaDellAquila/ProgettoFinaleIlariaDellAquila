import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../classes/fattura';
import { StatoFattura } from '../classes/stato-fattura';
import { Fatture } from '../interfaces/fatture';
import { StatoFatture } from '../interfaces/stato-fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor( private http : HttpClient) { }

  getAllFatture() {
   return this.http.get<Fatture>(environment.serverAdress + 'api/fatture?page=0&size=20&sort=id,DESC')
  }

  getFattureById(id: number){
    return this.http.get<Fattura>(environment.serverAdress + 'api/fatture/' + id)
  }

  updateFattura(fattura: Fattura){
    return this.http.put<Fattura>(environment.serverAdress + 'api/fatture/' + fattura.id, fattura)
  }
  removeFattura(fattura: Fattura) {
    return this.http.delete(environment.serverAdress + 'api/fatture/' + fattura.id)
  }

  createFattura(fattura: Fattura){
    return this.http.post<Fattura>(environment.serverAdress + 'api/fatture', fattura)
  }

  getAllStatoFattura() {
    return this.http.get<StatoFatture>(environment.serverAdress + 'api/statifattura?page=0&size=20&sort=id,ASC');
  }

}
