import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettagli-fatture',
  templateUrl: './dettagli-fatture.component.html',
  styleUrls: ['./dettagli-fatture.component.css']
})
export class DettagliFattureComponent implements OnInit {

  fattura: Fattura= new Fattura();

  constructor(private route: ActivatedRoute, private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureById(data[('id')]).subscribe(response => this.fattura = response);
    });
  }
  modficaFattura(fattura: Fattura) {
    this.router.navigate(['fatture', fattura.id, 'modifica']);
  }

}
