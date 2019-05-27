import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-pesquisar',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `,
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  search = null

  constructor(private disco: DiscoService) { }

  ngOnInit() {
    this.disco.pesquisar(this.search)

  }

}
