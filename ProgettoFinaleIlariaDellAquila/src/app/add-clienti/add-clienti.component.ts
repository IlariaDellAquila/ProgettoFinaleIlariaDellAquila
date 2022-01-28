import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { Comuni } from '../interfaces/comuni';
import { Province } from '../interfaces/province';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-add-clienti',
  templateUrl: './add-clienti.component.html',
  styleUrls: ['./add-clienti.component.css']
})
export class AddClientiComponent implements OnInit {

  cliente: Cliente = new Cliente();
  tipoCliente: string[] = [];
  comuni: Comune [] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getTipiClienti().subscribe(data => {
      this.tipoCliente = data;
    });
    this.clientiService.getAllComuni().subscribe(data => {
      this.comuni = data.content;
    });
  }
 
  addCliente() {
    this.cliente.dataInserimento = '2019-06-01T08:11:01.911+00:00';
    this.cliente.dataUltimoContatto = '2021-03-24T21:32:06.375+00:00';
    this.clientiService.createCliente(this.cliente).subscribe(data => {
     this.cliente= data;
     this.router.navigate(['clienti']);
    })

  }
}



