import { Component, OnInit } from '@angular/core';
import { DiscoService } from './disco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdevbook-musicmatch';
  musica = null
  constructor(private disco: DiscoService, private route: ActivatedRoute) {

  }
  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.musica = this.disco.encontrarMusica(parseInt(id));
  //   this.disco.preencherObjetoMusica(this.musica);
  // }

}
