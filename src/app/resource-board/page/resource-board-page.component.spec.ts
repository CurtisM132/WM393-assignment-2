import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../material.module';
import { ActivatedRoute, ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { MockKeycloakService } from '../../authentication/mock-keycloak-service';
import { ResourceBoardModule } from '../resource-board.module';
import { AbstractResourceBoardService } from '../board/shared/resource-board.abstract-service';
import { MockResourceBoardService } from '../board/shared/resource-board.mock.service';
import { AuthenticationService } from '../../authentication/authentication.service';

import { ResourceBoardPageComponent } from './resource-board-page.component';


describe('ResourceBoardPageComponent', () => {
  let component: ResourceBoardPageComponent;
  let fixture: ComponentFixture<ResourceBoardPageComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub();
    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [ ResourceBoardPageComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        ResourceBoardModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AuthenticationService, useClass: AuthenticationService },
        { provide: AbstractResourceBoardService, useClass: MockResourceBoardService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBoardPageComponent);
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
