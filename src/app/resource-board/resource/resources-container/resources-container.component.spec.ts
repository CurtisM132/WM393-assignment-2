import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../../material.module';
import { ActivatedRoute, ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { ResourceBoardModule } from '../../resource-board.module';
import { AbstractResourceService } from '../shared/resource.abstract.service';
import { MockResourceService } from '../shared/resource.mock.service';

import { ResourcesContainerComponent } from './resources-container.component';


describe('ResourcesContainerComponent', () => {
  let component: ResourcesContainerComponent;
  let fixture: ComponentFixture<ResourcesContainerComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ boardId: "1" })

    const routerSpy = createRouterSpy();

    await TestBed.configureTestingModule({
      declarations: [ResourcesContainerComponent],
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
        { provide: AbstractResourceService, useClass: MockResourceService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesContainerComponent);
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
