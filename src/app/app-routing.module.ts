import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleHomePageComponent } from './teaching-modules/page/teaching-modules-page.component';
import { ModuleSidenavComponent } from './teaching-modules/sidenav/teaching-modules-sidenav.component';
import { FunctionHomePageComponent } from './module-function/function-home-page/function-home-page.component';
import { FunctionSidenavComponent } from './module-function/function-sidenav/function-sidenav.component';
import { ResourceBoardPageComponent } from './resource-board/page/resource-board-page.component';
import { DisplayResourceComponent } from './resource-board/resource/display-resource/display-resource.component';
import { ResourcesContainerComponent } from './resource-board/resource/resources-container/resources-container.component';


const routes: Routes = [
  { path: '', component: ModuleHomePageComponent },
  { path: '', component: ModuleSidenavComponent, outlet: "sidenav" },
  { path: ':id', component: FunctionHomePageComponent },
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
  { path: 'function', component: FunctionSidenavComponent, outlet: "sidenav" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
