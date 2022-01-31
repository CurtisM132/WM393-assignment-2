import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teaching-module-functions-sidenav',
  templateUrl: './teaching-module-functions-sidenav.component.html'
})
export class TeachingModuleFunctionsSidenavComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public handleNavigation(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
