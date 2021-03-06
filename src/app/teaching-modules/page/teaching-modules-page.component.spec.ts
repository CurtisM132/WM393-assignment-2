import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../material.module';
import { TeachingModulesModule } from '../teaching-modules.module';
import { AbstractAuthenticationService } from '../../authentication/authentication.abstract.service';
import { MockAuthenticationService } from '../../authentication/authentication.mock.service';
import { MockKeycloakService } from '../../authentication/mock-keycloak-service';
import { AbstractTeachingModulesService } from '../shared/teaching-modules.abstract.service';
import { MockTeachingModulesService } from '../shared/teaching-modules.mock.service';

import { TeachingModulesPageComponent } from './teaching-modules-page.component';


describe('TeachingModulesPageComponent', () => {
  let component: TeachingModulesPageComponent;
  let fixture: ComponentFixture<TeachingModulesPageComponent>;

  beforeEach(async () => {
    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [ TeachingModulesPageComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        TeachingModulesModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractAuthenticationService, useClass: MockAuthenticationService },
        { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModulesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createRouterSpy() {
  return jasmine.createSpyObj('Router', ['navigate']);
}
