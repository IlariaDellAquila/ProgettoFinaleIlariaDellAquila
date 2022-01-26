import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../interfaces/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor( private http : HttpClient) { }

  getAllFatture() {
   return this.http.get<Fatture>(environment.serverAdress + 'api/fatture?page=0&size=20&sort=id,ASC')
  }
}
