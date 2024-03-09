import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
export const routes: Routes = [
    {path:'home' , component: PortafolioComponent},
    {path:'about' , component: AboutComponent},
    {path:'item' , component: ItemComponent},
    {path:'**' , pathMatch: 'full', redirectTo:'home'}
];
