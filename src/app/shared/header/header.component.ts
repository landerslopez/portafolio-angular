import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(public paginaService: InfoPaginaService){

  }
  ngOnInit(): void {
  }

}
