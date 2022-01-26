import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-modifica-fattura',
  templateUrl: './modifica-fattura.component.html',
  styleUrls: ['./modifica-fattura.component.css']
})
export class ModificaFatturaComponent implements OnInit {

  fattura: Fattura = new Fattura();

  constructor(private fattureService:FattureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureById(data['id']).subscribe(response => this.fattura = response)
    });

  }
  update(){
    this.fattureService.updateFattura(this.fattura).subscribe(response => this.fattura = response);
    this.router.navigate(['fatture'])
  }
}
