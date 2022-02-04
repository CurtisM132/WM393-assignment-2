import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../../material.module';
import { ResourceBoardModule } from '../../resource-board.module';
import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { mockResources } from '../shared/resource.mock.data';
import { AbstractAuthenticationService } from '../../../authentication/authentication.abstract.service';
import { MockAuthenticationService } from '../../../authentication/authentication.mock.service';

import { ResourceTableComponent } from './resource-table.component';


describe('ResourceTableComponent', () => {
  let component: ResourceTableComponent;
  let fixture: ComponentFixture<ResourceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceTableComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        ResourceBoardModule
      ],
      providers: [
        { provide: KeycloakService, useClass: MockKeycloakService },
        { provide: AbstractAuthenticationService, useClass: MockAuthenticationService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTableComponent);
    component = fixture.componentInstance;
    component.resources = of(mockResources);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
