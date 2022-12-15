import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmCreateComponent } from './film/film-create/film-create.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { RegistaCreateComponent } from './regista/regista-create/regista-create.component';
import { RegistaListComponent } from './regista/regista-list/regista-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'regista/list', component: RegistaListComponent },
  { path: 'regista/create', component: RegistaCreateComponent },
  { path: 'film/list', component: FilmListComponent },
  { path: 'film/create', component: FilmCreateComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
