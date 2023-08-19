import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { evento } from 'src/app/core/interfaces/eventos';
import { personaVacia } from 'src/app/core/interfaces/persona';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
})
export class NuevoEventoPage implements OnInit {

  constructor(
    private navCtrl: NavController
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

  cambiarFecha(evento: any){
    this.eventoActual.fecha = new Date(evento.detail.value)
  }
  
  guardar(){
    console.log("GUARDAR",this.eventoActual)
    
  }
}
