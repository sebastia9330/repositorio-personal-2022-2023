import { Injectable } from '@angular/core';
import { evento } from '../interfaces/eventos';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private storage: StorageService
  ) { }

  async getEventos(): Promise<evento[]>{
    return await this.storage.get("eventos");
  }

  getEvento(id: number){
    return this.eventosDefault.find(evento => evento.id == id);
  }

  async setNuevoEvento(evento:evento){
    const nuevoEvento:evento = evento;
    let eventos:evento[] = await this.getEventos();
    if(!eventos || eventos.length === 0){
      eventos = []
      nuevoEvento.id = 1;
    }else{
      nuevoEvento.id = eventos[eventos.length -1].id!+1
    }
    eventos.push(evento);
    this.storage.set("eventos", eventos);
    return nuevoEvento.id
  }

  eventosDefault:evento[] = [
    {
      id: 1,
      titulo: "Evento 1",
      participantes: [{
        nombre: "Juan",
      },
      {
        nombre: "Maria",
        muestra: true,
        regala: "Juan"
      }],
      fecha: new Date()
    },
    {
      id: 2,
      titulo: "Evento 2",
      participantes: [{
        nombre: 'Juan', 
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
