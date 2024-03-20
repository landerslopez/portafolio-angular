import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo:any[]=[];

  constructor(private client: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.client.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo() {
    this.client.get('https://angular-html-3ad10-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
      //console.log(resp)
    });
  }
}
