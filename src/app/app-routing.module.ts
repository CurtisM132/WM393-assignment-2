import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ResourceBoardPageComponent } from './resource-board/resource-board-page/resource-board-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resource', component: ResourceBoardPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
