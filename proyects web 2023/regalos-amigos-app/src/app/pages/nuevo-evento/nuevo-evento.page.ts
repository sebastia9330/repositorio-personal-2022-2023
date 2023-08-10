import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
})
export class NuevoEventoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  
  descartar(){
    this.navCtrl.navigateBack("")
  }

  guardar(){
    
  }
}
