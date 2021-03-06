import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../material.module';
import { MockKeycloakService } from '../authentication/mock-keycloak-service';

import { AccountSettingsMenuComponent } from './account-settings-menu.component';
import { MockAuthenticationService } from '../authentication/authentication.mock.service';
import { AbstractAuthenticationService } from '../authentication/authentication.abstract.service';

describe('AccountSettingsMenuComponent', () => {
  let component: AccountSettingsMenuComponent;
  let fixture: ComponentFixture<AccountSettingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingsMenuComponent ],
      imports: [
        CommonModule,
        MaterialModule,
      ],
      providers: [
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractAuthenticationService, useClass: MockAuthenticationService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
