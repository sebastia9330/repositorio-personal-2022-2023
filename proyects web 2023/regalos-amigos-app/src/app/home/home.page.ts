import { Component } from '@angular/core';
import {evento} from '../core/interfaces/eventos'
import { EventosService } from '../core/service/eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventos:evento[];

  constructor(
    private es: EventosService
  ) {
    this.eventos = es.getEventos();
  }

  

}
