import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Fattura } from '../classes/fattura';
import { StatoFattura } from '../classes/stato-fattura';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.css']
})
export class AddFattureComponent implements OnInit {
  fattura: Fattura = new Fattura();
  fatture: StatoFattura[] = [];

  constructor(private route: ActivatedRoute, private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattura.cliente.id = data['id'];
    })
    this.route.params.subscribe(data => {
      this.fattureService.getAllStatoFattura().subscribe(response => this.fatture = response.content)
    });
  }

  addFattura() {
    this.fattura.data = "2019-07-31T16:09:43.763+00:00";
    this.fattureService.createFattura(this.fattura).subscribe();
    this.router.navigate(['fatture']);
  }

}
