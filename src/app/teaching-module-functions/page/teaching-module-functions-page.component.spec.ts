import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../material.module';
import { ModuleFunctionsModule } from '../module-functions.module';
import { MockKeycloakService } from '../../authentication/mock-keycloak-service';
import { AbstractTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.abstract.service';
import { MockTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.mock.service';
import { ActivatedRoute, ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { AbstractAuthenticationService } from '../../authentication/authentication.abstract.service';
import { MockAuthenticationService } from '../../authentication/authentication.mock.service';

import { TeachingModuleFunctionsPageComponent } from './teaching-module-functions-page.component';


describe('TeachingModuleFunctionsPageComponent', () => {
  let component: TeachingModuleFunctionsPageComponent;
  let fixture: ComponentFixture<TeachingModuleFunctionsPageComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ id: "1" })

    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [ TeachingModuleFunctionsPageComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        ModuleFunctionsModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractAuthenticationService, useClass: MockAuthenticationService },
        { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModuleFunctionsPageComponent);
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
