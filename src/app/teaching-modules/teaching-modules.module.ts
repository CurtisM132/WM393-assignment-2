import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { TeachingModulesPageComponent } from './page/teaching-modules-page.component';
import { AbstractTeachingModulesService } from './shared/teaching-modules.abstract.service';
import { MockTeachingModulesService } from './shared/teaching-modules.mock.service';


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
    { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService }
  ]
})
export class TeachingModulesModule { }
