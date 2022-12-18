import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';
import { DecodificasessoPipe } from './pipes/decodificasesso.pipe';
import { IfRoleDirective } from './directives/if-role.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective,
    DecodificasessoPipe,
    IfRoleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsUserLoggedDirective,
    DecodificasessoPipe,
    IfRoleDirective
  ]
})
export class SharedModule { }
