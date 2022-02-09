import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fatture: Fattura[] = [];

  constructor(private route: ActivatedRoute, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getByCliente(data['id']).subscribe(response => {
        this.fatture = response.content
      })
    })
  }

}
