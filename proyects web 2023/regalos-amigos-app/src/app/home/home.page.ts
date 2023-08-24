import { Component } from '@angular/core';
import {evento} from '../core/interfaces/eventos'
import { EventosService } from '../core/service/eventos.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {

  eventos?:evento[];

  constructor(
    private es: EventosService,
  ) {
    
  }
  ionViewWillEnter(): void {
    this.es.getEventos().then(eventos =>{
      this.eventos = eventos ? eventos : []
    })
  }

  

}
