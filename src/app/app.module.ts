import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule } from 'keycloak-angular';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ModuleFunctionsModule } from './teaching-module-functions/module-functions.module';
import { TeachingModulesModule } from './teaching-modules/teaching-modules.module';
import { ResourceBoardModule } from './resource-board/resource-board.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountSettingsMenuComponent } from './account-settings-menu/account-settings-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    AccountSettingsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MaterialModule,
    TeachingModulesModule,
    ModuleFunctionsModule,
    ResourceBoardModule,
  ],
  providers: [
    ...environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
