import { Directive, ElementRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[isLogged]'
})
export class IsUserLoggedDirective {

  @Input() set isLogged(isLoggedIn: boolean) {
    if(!isLoggedIn) {
      this.elementRef.nativeElement.style.display="none";
    } else {
      this.elementRef.nativeElement.style.display="block";
    }
  } 

  constructor(private elementRef: ElementRef) { }

}
