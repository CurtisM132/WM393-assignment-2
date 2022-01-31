import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teaching-modules-page',
  templateUrl: './teaching-modules-page.component.html',
  styleUrls: ['./teaching-modules-page.component.css']
})
export class ModuleHomePageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public handleModuleSelection(): void {
    this.router.navigate(['', 1]);
  }

}
