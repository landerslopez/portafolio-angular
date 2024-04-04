import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(public paginaService: InfoPaginaService, private router: Router){

  }
  ngOnInit(): void {
  }

  buscarProducto(termino:string){
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
