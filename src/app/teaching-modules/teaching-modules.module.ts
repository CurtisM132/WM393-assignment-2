import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { environment } from 'src/environments/environment';

import { TeachingModulesPageComponent } from './page/teaching-modules-page.component';


@NgModule({
  declarations: [
    TeachingModulesPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    TeachingModulesPageComponent,
  ],
  providers: [
    ...environment.providers,
  ]
})
export class TeachingModulesModule { }
