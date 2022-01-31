import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { FunctionSidenavComponent } from './function-sidenav/function-sidenav.component';
import { FunctionHomePageComponent } from './function-home-page/function-home-page.component';


@NgModule({
  declarations: [
    FunctionSidenavComponent,
    FunctionHomePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    FunctionSidenavComponent,
    FunctionHomePageComponent,
  ],
  providers: []
})
export class ModuleFunctionModule { }
