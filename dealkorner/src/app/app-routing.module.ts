import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenuComponent } from './components/contenu/contenu.component';


const routes: Routes = [
  {path:"contenu", component:ContenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
