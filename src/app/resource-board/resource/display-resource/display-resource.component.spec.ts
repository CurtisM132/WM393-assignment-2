import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { MaterialModule } from '../../../material.module';
import { ResourceBoardModule } from '../../resource-board.module';
import { AbstractResourceService } from '../shared/resource.abstract.service';
import { MockResourceService } from '../shared/resource.mock.service';
import { ActivatedRoute, ActivatedRouteStub } from '../../../../testing/activated-route-stub';

import { DisplayResourceComponent } from './display-resource.component';


describe('DisplayResourceComponent', () => {
  let component: DisplayResourceComponent;
  let fixture: ComponentFixture<DisplayResourceComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ boardId: "1", resourceId: "1" })

    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [DisplayResourceComponent],
      imports: [
        CommonModule,
        MaterialModule,
        ResourceBoardModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractResourceService, useClass: MockResourceService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResourceComponent);
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