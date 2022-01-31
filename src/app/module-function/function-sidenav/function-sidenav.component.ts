import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-function-sidenav',
  templateUrl: './function-sidenav.component.html'
})
export class FunctionSidenavComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public handleNavigation(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
