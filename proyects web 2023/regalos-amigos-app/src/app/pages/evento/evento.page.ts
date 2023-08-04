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

  constructor(
    private ar: ActivatedRoute,
    private es: EventosService,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController

  ) { 
    ar.params.subscribe(param => {
      console.log(param["id"]);
      this.evento = this.es.getEvento(param["id"])
      
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
          text: 'Ocultar',
          role: "Ocultar",
          data: {
            action: 'Ocultar',
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
    if(result.role === "Ocultar") this.evento!.participantes[i].muestra = !this.evento?.participantes[i].muestra
  }

  atras(){
    this.navCtrl.navigateBack("")
  }

}
