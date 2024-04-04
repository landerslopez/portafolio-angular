import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { resolve } from 'node:path';
import { rejects } from 'node:assert';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private client: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, rejects) => {
      this.client.get('https://angular-html-3ad10-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargando = false;
          resolve(this.productos);
        });
    });
  }

  getProducto(id: string) {
    return this.client.get(`https://angular-html-3ad10-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if(this.productos.length===0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){
    console.log(this.productos)
    this.productoFiltrado=[];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)==0 || tituloLower.indexOf(termino)==0){
        this.productoFiltrado.push(prod);
      }
    });
  }
}