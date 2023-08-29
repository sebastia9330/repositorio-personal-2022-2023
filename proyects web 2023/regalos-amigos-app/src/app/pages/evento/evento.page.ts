import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { evento } from 'src/app/core/interfaces/eventos';
import { EventosService } from 'src/app/core/service/eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento?: evento;
  result?: string;
  ts: any;

  constructor(
    private ar: ActivatedRoute,
    private es: EventosService,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController

  ) { 
    ar.params.subscribe(param => {
      console.log(param["id"]);
      this.es.getEvento(param["id"]).then(evento => this.evento = evento);
    })
  }

  ngOnInit() {
  }

  async modalMostrar(i:number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Mostrar a quien regala',
      subHeader: '¿Estás seguro de que querés ver esta informacion?',
      buttons: [
        {
          text: 'Mostrar',
          role: "Mostrar",
          data: {
            action: 'Mostrar',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
    if(result.role === "Mostrar") this.evento!.participantes[i].muestra = !this.evento?.participantes[i].muestra
  }

  atras(){
    this.navCtrl.navigateBack("")
  }

  async modalBorrar(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Eliminar evento',
      subHeader: '¿Estás seguro de que quierés eliminar este evento?',
      buttons: [
        {
          text: 'Borrar',
          role: "borrar",
          data: {
            action: 'borrar',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
    if(result.role === "cancel") return;
    if(result.role === "borrar"){
      this.es.borrarEvento(this.evento!.id!)
    }
    this.atras()
}
  
  async modalResortear(){
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Resorteando evento',
        subHeader: '¿Estás seguro de que querés resortear este evento?',
        buttons: [
          {
            text: 'Resortear',
            role: "resortear",
            data: {
              action: 'resortear',
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ],
      });
  
      await actionSheet.present();
  
      const result = await actionSheet.onDidDismiss();
      this.result = JSON.stringify(result, null, 2);
      if(result.role === "cancel") return;
      if(result.role === "resortear"){
        const NuevoEvento = this.es.sortearEvento(this.evento!);
        this.es.editEvento(NuevoEvento);
      }
  }
  
  async modalFinalizar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cambiando estado al evento',
      subHeader: this.evento!.finalizado ? "¿Desea restaurar este evento?" : "¿Desea finalizar y bloquear este evento?",
      buttons: [
        {
          text: this.evento!.finalizado ? "Restaurar evento" : "Terminar evento",
          role: "cambiar",
          data: {
            action: 'cambiar',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
    if(result.role === "cancel") return;
    if(result.role === "cambiar") {
      this.evento!.finalizado = !this.evento!.finalizado
      this.es.editEvento(this.evento!);
    }
    if(this.evento!.finalizado) this.atras();
  }
  

}
