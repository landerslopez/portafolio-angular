import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private route: ActivatedRoute, public servicesProducto: ProductosService){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params['termino'])
      this.servicesProducto.buscarProducto(params['termino'])
    })
  }


}
