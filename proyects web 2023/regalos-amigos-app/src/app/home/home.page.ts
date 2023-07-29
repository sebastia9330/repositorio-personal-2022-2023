import { Component } from '@angular/core';
import {evento} from '../core/interfaces/eventos'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  eventos:evento[] = [
    {
      id: 1,
      titulo: "Evento 1",
      participantes: [{
        nombre: "Juan",
      },
      {
        nombre: "Maria"
      }],
      fecha: new Date()
    },
    {
      id: 2,
      titulo: "Evento 2",
      participantes: [{
        nombre: 'juan', 
      }],
      fecha: new Date()
    },
    {
      id: 3,
      titulo: "Evento 3",
      participantes: [{
        nombre: "Juan"}, 
        {nombre: "Maria"
      }, 
      {nombre: "Pepe"
    }],
      fecha: new Date()
    }
  ]

}
