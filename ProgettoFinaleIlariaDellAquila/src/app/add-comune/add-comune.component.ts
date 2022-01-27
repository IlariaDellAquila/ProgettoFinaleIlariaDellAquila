import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {

  comune: Comune = new Comune();
  provincia: Provincia[] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllProvince().subscribe(data=> {
      this.provincia = data.content;
    })
  }
  addComune(){
    this.clientiService.createComune(this.comune).subscribe(data => {
      this.comune= data;
     })
     this.router.navigate(['aggiungiClienti']);
  }

}
