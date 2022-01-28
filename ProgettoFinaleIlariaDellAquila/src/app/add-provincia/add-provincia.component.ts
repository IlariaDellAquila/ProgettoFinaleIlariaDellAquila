import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  provincia: Provincia = new Provincia();

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
  }

  addProvincia() {
    this.clientiService.createProvincia(this.provincia).subscribe(data => {
      this.provincia = data;
      this.router.navigate(['aggiungiComune']);
    });

 
  }

}
