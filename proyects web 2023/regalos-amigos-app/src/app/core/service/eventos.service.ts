import { Injectable } from '@angular/core';
import { evento } from '../interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getEventos(): evento[]{
    return this.eventosDefault;
  }

  getEvento(id: number){
    return this.eventosDefault.find(evento => evento.id == id);
  }

  eventosDefault:evento[] = [
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
