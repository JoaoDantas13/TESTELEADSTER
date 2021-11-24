import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../classes/usuarios';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-albumfotos',
  templateUrl: './albumfotos.component.html',
  styleUrls: ['./albumfotos.component.css']
})
export class AlbumfotosComponent implements OnInit {

  usuarios : Usuarios[];

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.usuarios = dados);
  }

}
