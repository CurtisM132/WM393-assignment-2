import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { TeachingModuleFunctionsSidenavComponent } from './sidenav/teaching-module-functions-sidenav.component';
import { TeachingModuleFunctionsPageComponent } from './page/teaching-module-functions-page.component';


@NgModule({
  declarations: [
    TeachingModuleFunctionsSidenavComponent,
    TeachingModuleFunctionsPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    TeachingModuleFunctionsSidenavComponent,
    TeachingModuleFunctionsPageComponent,
  ],
  providers: []
})
export class ModuleFunctionsModule { }
