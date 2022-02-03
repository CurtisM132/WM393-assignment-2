import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../../material.module';
import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { ResourceBoardModule } from '../../resource-board.module';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { mockResources } from '../shared/resource.mock.data';

import { ResourceTableComponent } from './resource-table.component';
import { of } from 'rxjs';


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
        { provide: AuthenticationService, useClass: AuthenticationService },
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
