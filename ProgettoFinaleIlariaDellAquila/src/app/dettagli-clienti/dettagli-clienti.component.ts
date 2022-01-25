import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-dettagli-clienti',
  templateUrl: './dettagli-clienti.component.html',
  styleUrls: ['./dettagli-clienti.component.css']
})
export class DettagliClientiComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private route: ActivatedRoute, private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClienteById(data[('id')]).subscribe(response => this.cliente = response);
    });
  }
  
  modifica(cliente: Cliente) {
    this.router.navigate(['clienti', cliente.id, 'modifica']);
  }

}
