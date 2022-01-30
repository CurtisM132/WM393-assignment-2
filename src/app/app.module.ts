import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { InitialiseKeycloak } from './authentication/keycloak';

import { ResourceBoardModule } from './resource-board/resource-board.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountSettingsMenuComponent } from './account-settings-menu/account-settings-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
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
    ResourceBoardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitialiseKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
