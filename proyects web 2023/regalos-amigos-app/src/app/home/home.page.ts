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
      titulo: "Evento 1",
      personas: ["Juan", "Maria"],
      fecha: new Date()
    },
    {
      titulo: "Evento 2",
      personas: ["Juan"],
      fecha: new Date()
    },
    {
      titulo: "Evento 3",
      personas: ["Juan", "Maria", "Pepe"],
      fecha: new Date()
    }
  ]

}
