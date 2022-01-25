import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-table-clienti',
  templateUrl: './table-clienti.component.html',
  styleUrls: ['./table-clienti.component.css']
})
export class TableClientiComponent implements OnInit {

  cliente : Cliente[] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => {
      this.cliente = data.content;
    })  
  }

  detailClinte(item : Cliente) {
    this.router.navigate(['clienti', item.id, 'dettagli'])
  }
  
  remove(item: Cliente){
    this.clientiService.removeCliente(item).subscribe(data => {
      this.cliente = this.cliente.filter(ele => ele !== item);
    })
  }

}
