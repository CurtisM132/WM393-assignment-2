import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { KeycloakService } from 'keycloak-angular';

import { MaterialModule } from '../../../material.module';
import { MockKeycloakService } from '../../../authentication/mock-keycloak-service';
import { ResourceBoardModule } from '../../resource-board.module';
import { AuthenticationService } from '../../../authentication/authentication.service';

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
        { provide: AuthenticationService, useClass: AuthenticationService },
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
