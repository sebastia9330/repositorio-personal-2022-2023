import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { evento } from 'src/app/core/interfaces/eventos';
import { personaVacia } from 'src/app/core/interfaces/persona';
import { EventosService } from 'src/app/core/service/eventos.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
})
export class NuevoEventoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private es:EventosService
  ) { }

  eventoActual: evento = {
    titulo: "",
    participantes: [{...personaVacia},{...personaVacia},{...personaVacia}],
    fecha: new Date(),
  }
  hoy = new Date().toISOString();

  ngOnInit() {
  }
  
  descartar(){
    this.navCtrl.navigateBack("")
  }

<<<<<<< HEAD
  async guardar(){
    await this.es.setNuevoEvento(this.eventoActual);
    this.navCtrl.navigateBack("")
=======
  cambiarFecha(evento: any){
    this.eventoActual.fecha = new Date(evento.detail.value)
  }
  
  guardar(){
    console.log("GUARDAR",this.eventoActual)
    
>>>>>>> d670d724c849222414c7a8f7856ad939fbf6435e
  }
}
