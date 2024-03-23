import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;
  productos: Producto[]=[];

  constructor(private client:HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.client.get('https://angular-html-3ad10-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: any) => {
      this.productos = resp;
      this.cargando=false;
    });
  }
}