import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { evento } from 'src/app/core/interfaces/eventos';
import { personaVacia } from 'src/app/core/interfaces/persona';
import { EventosService } from 'src/app/core/service/eventos.service';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
})
export class NuevoEventoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private es:EventosService,
    private ts:ToastService,
    private alertController: AlertController
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
  

  async guardar(){
    const participantesReales = this.eventoActual.participantes.filter(participante => participante.nombre !== "");
    if(participantesReales.length < 3) return this.alertFaltanParticipantes();
    const eventoSorteado = this.es.sortearEvento(this.eventoActual);
    await this.es.setNuevoEvento(eventoSorteado);
    this.ts.presentToast("Evento creado con exito")
    this.navCtrl.navigateBack("")
  }

  agregarParticipantes(){
    this.eventoActual.participantes.push({...personaVacia});
  }

  eliminarParticipante(i:number){
    this.eventoActual.participantes.splice(i,1)
  }


  async alertFaltanParticipantes(){
    const alert = await this.alertController.create({
      header: 'Faltan Participantes',
      message: 'Un evento debe tener almenos tres participantes',
      buttons: ['OK']
    });

    await alert.present();
  }
}
