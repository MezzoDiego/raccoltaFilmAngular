import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[ifRole]'
})
export class IfRoleDirective implements OnChanges{

  private subscription: Subscription[] = [];
  // the role the user must have
  @Input() public ifRole: Array<string> | undefined;

  /**
   * @param {ViewContainerRef} viewContainerRef -- the location where we need to render the templateRef
   * @param {TemplateRef<any>} templateRef -- the templateRef to be potentially rendered
   * @param {RolesService} rolesService -- will give us access to the roles a user has
   */
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {}

  public ngOnChanges(): void {
    this.subscription.push(
      this.authService.getUserRoles().subscribe(res => {
        if (!res.roles) {
          // Remove element from DOM
          this.viewContainerRef.clear();
        }
        // user Role are checked by a Roles mention in DOM
        const idx = res.roles.findIndex((element) => this.ifRole?.indexOf(element) !== -1);
        if (idx < 0) {
          this.viewContainerRef.clear();
        } else {
          // appends the ref element to DOM
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      })
    );
  }

}
