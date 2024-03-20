import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  anio: number = new Date().getFullYear();
  
  constructor(public paginaService: InfoPaginaService){

  }

  ngOnInit(): void {

  }

}
