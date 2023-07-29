import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(
    private ar: ActivatedRoute
  ) { 
    ar.params.subscribe(param => {
      console.log(param["id"]);
    })
  }

  ngOnInit() {
  }

}
