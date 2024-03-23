import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent implements OnInit{

  constructor(public servicesProducto: ProductosService){

  }
  ngOnInit(): void {
    
  }

}
