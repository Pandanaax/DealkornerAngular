import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListedealComponent } from './components/listedeal/listedeal.component';
import { CreatedealComponent } from './components/createdeal/createdeal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewdealComponent } from './components/viewdeal/viewdeal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListedealComponent,
    CreatedealComponent,
    ViewdealComponent, ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
