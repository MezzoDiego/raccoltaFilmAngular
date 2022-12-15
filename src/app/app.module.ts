import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistaListComponent } from './regista/regista-list/regista-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistaCreateComponent } from './regista/regista-create/regista-create.component';
import { FormsModule } from '@angular/forms';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmCreateComponent } from './film/film-create/film-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    RegistaListComponent,
    RegistaCreateComponent,
    FilmListComponent,
    FilmDetailComponent,
    FilmCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
