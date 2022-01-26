import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-table-fatture',
  templateUrl: './table-fatture.component.html',
  styleUrls: ['./table-fatture.component.css']
})
export class TableFattureComponent implements OnInit {

  fattura : Fattura[] = [];

  constructor(private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(data => {
      this.fattura = data.content;
    }) 
  }

  dettagli(item: Fattura){
    this.router.navigate(['fatture', item.id, 'dettagli'])

  }

  removeFattura(item: Fattura){
    this.fattureService.removeFattura(item).subscribe(data => {
      this.fattura = this.fattura.filter(ele => ele !== item);
    })

  }

}
