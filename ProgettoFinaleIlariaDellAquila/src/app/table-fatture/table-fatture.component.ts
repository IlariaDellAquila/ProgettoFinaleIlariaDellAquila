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

}
