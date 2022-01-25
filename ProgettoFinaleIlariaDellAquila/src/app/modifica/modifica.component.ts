import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  tipiClienti: string[] = [];

  cliente: Cliente = new Cliente();

  constructor(private clientiService: ClientiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClienteById(data['id']).subscribe(response => this.cliente= response)
    })
  }

  update(){
      this.clientiService.updateCliente(this.cliente).subscribe(response => this.cliente = response);
      this.router.navigate(['clienti'])

  }


}
