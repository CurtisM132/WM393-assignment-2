import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';

import { HomePageComponent } from './home-page/home-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  providers: []
})
export class HomeModule { }
