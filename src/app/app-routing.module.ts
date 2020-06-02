import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';


const routes: Routes = [{
  path:'', component: PaisesComponent  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
