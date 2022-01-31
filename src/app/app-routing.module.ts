import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleHomePageComponent } from './teaching-modules/page/teaching-modules-page.component';
import { TeachingModuleFunctionsPageComponent } from './teaching-module-functions/page/teaching-module-functions-page.component';
import { TeachingModuleFunctionsSidenavComponent } from './teaching-module-functions/sidenav/teaching-module-functions-sidenav.component';
import { ResourceBoardPageComponent } from './resource-board/page/resource-board-page.component';
import { DisplayResourceComponent } from './resource-board/resource/display-resource/display-resource.component';
import { ResourcesContainerComponent } from './resource-board/resource/resources-container/resources-container.component';


const routes: Routes = [
  { path: '', component: ModuleHomePageComponent },
  { path: ':id', component: TeachingModuleFunctionsPageComponent },
  {
    path: ':id/resource',
    component: ResourceBoardPageComponent,
    children: [
      {
        path: ':boardId',
        component: ResourcesContainerComponent,
      },
      {
        path: ':boardId/:resourceId',
        component: DisplayResourceComponent,
      }
    ]
  },
  { path: 'function', component: TeachingModuleFunctionsSidenavComponent, outlet: "sidenav" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
