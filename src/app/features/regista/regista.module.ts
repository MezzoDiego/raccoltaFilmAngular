import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistaCreateComponent } from './regista-create/regista-create.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'list',
    component: RegistaListComponent
  },

  {
    path: 'create',
    component: RegistaCreateComponent
  },

  {
    path: 'edit/:id',
    component: RegistaCreateComponent
  },

  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }


];

@NgModule({
  declarations: [
    RegistaListComponent,
    RegistaCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule

  ],
  providers: []
})
export class RegistaModule { }
