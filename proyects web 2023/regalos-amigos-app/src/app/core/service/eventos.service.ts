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

  async getEvento(id: number){
    const eventos = await this.getEventos();
    return eventos.find(evento => evento.id == id);
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

  sortearEvento(evento:evento):evento{
    const nuevoEvento = evento;
    let participantesDisponibles:string[] = [];
    evento.participantes.forEach((participante, i) =>{
      if(participante.nombre === ""){
        nuevoEvento.participantes.splice(i,1);
        participantesDisponibles.push(evento.participantes[i].nombre)
      }else{
        participantesDisponibles.push(participante.nombre);
      }
      let posicionAleatoria:number
      do{
        posicionAleatoria = Math.floor(Math.random()*participantesDisponibles.length)
      }
      while(participante.nombre === participantesDisponibles[posicionAleatoria])
        participante.regala = participantesDisponibles[posicionAleatoria];
      participantesDisponibles.splice(posicionAleatoria,1);
    })
    return nuevoEvento;
  }

}
