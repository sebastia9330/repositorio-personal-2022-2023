import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private es: EventosService
  ) { 
    ar.params.subscribe(param => {
      console.log(param["id"]);
      const evento = this.es.getEvento(param["id"])
      console.table(evento)
    })
  }

  ngOnInit() {
  }

}
