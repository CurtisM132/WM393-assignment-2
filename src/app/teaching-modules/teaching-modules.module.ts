import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { ModuleHomePageComponent } from './page/teaching-modules-page.component';
import { ModuleSidenavComponent } from './sidenav/teaching-modules-sidenav.component';


@NgModule({
  declarations: [
    ModuleHomePageComponent,
    ModuleSidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    ModuleSidenavComponent,
    ModuleHomePageComponent,
  ],
  providers: []
})
export class TeachingModulesModule { }
