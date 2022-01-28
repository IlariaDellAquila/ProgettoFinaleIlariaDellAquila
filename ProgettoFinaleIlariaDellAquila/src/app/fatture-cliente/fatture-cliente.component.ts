import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Fattura } from '../classes/fattura';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {
 
  cliente: Cliente = new  Cliente();
  fattura: Fattura[] = [];  
  constructor(private clientiService: ClientiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
      this.cliente.id = data['id']; 
       })


   this.clientiService.getByCliente(this.cliente).subscribe(data => {
      this.fattura = data.content;
      console.log(data)

    }) 
  }
}
