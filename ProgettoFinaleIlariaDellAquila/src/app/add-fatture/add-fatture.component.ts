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

  constructor(private route: ActivatedRoute, private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
  }

  addFattura() {
    this.fattura.stato.nome='NON PAGATO';
    this.fattura.data = '2019-06-01T08:11:01.911+00:00';
    this.fattureService.createFattura(this.fattura).subscribe(data => {
     this.fattura = data;
    })
    this.router.navigate(['fatture']);
  }

}
