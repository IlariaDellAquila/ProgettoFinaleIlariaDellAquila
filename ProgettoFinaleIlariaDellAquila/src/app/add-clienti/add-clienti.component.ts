import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-add-clienti',
  templateUrl: './add-clienti.component.html',
  styleUrls: ['./add-clienti.component.css']
})
export class AddClientiComponent implements OnInit {

  cliente: Cliente = new Cliente();
  tipiClienti: string[] = [];
  tipiComuni: string[] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getTipiClienti().subscribe(data => {
      this.tipiClienti = data;
    });

  }

  addCliente() {
    this.clientiService.createCliente(this.cliente).subscribe(data => {
     // console.log(data)
     this.cliente= data;
    })
    this.router.navigate(['clienti']);
   }
}



