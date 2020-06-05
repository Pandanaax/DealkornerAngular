import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListedealComponent } from './components/listedeal/listedeal.component';
import { CreatedealComponent } from './components/createdeal/createdeal.component';



const routes: Routes = [
  {path: '', component: ListedealComponent},
  {path: 'createdeal', component: CreatedealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
