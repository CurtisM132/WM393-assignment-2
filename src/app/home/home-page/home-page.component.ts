import { Component } from '@angular/core';

/**
 * Component to hold all other components to display the Home page
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor() { }

  // TODO: Use authentication system - implement plz
  public authenticated = true;
}
