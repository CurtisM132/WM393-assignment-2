import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../material.module';
import { ModuleFunctionsModule } from '../module-functions.module';
import { MockKeycloakService } from '../../authentication/mock-keycloak-service';
import { AbstractTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.abstract.service';
import { MockTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.mock.service';
import { ActivatedRoute, ActivatedRouteStub } from '../../../testing/activated-route-stub';

import { TeachingModuleFunctionsSidenavComponent } from './teaching-module-functions-sidenav.component';


describe('TeachingModuleFunctionsSidenavComponent', () => {
  let component: TeachingModuleFunctionsSidenavComponent;
  let fixture: ComponentFixture<TeachingModuleFunctionsSidenavComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ id: "1" })

    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [ TeachingModuleFunctionsSidenavComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        RouterTestingModule.withRoutes([{path: ''}]),
        ModuleFunctionsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModuleFunctionsSidenavComponent);
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
