import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../../material.module';
import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { ResourceBoardModule } from '../../resource-board.module';
import { AbstractAuthenticationService } from '../../../authentication/authentication.abstract.service';
import { MockAuthenticationService } from '../../../authentication/authentication.mock.service';

import { ResourceBoardDisplayListComponent } from './resource-board-display-list.component';


describe('ResourceBoardDisplayListComponent', () => {
  let component: ResourceBoardDisplayListComponent;
  let fixture: ComponentFixture<ResourceBoardDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceBoardDisplayListComponent ],
      imports: [
        CommonModule,
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
    fixture = TestBed.createComponent(ResourceBoardDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
