import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

import { AbstractResourceBoardService } from '../board/shared/resource-board.abstract-service';
import { ResourceBoardSummary } from '../board/shared/resource-board.interface';

@Component({
  selector: 'app-resource-board-page',
  templateUrl: './resource-board-page.component.html',
  styleUrls: ['./resource-board-page.component.css']
})
export class ResourceBoardPageComponent implements OnInit {

  public isTutor: boolean = false;
  public resourceBoards: ResourceBoardSummary[] = [];

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private resourceBoardService: AbstractResourceBoardService,
  ) { }

  ngOnInit(): void {
    // Subscribe to the users account roles then get if they're a tutor or not
    this.authenticationService.haveRoles$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(haveRoles => {
        if (haveRoles) {
          this.isTutor = this.authenticationService.isTutor();
        } else {
          this.isTutor = false;
        }
      });

    this.fetchResourceBoards();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  private fetchResourceBoards(): void {
    // Get existing resource boards
    this.resourceBoardService.getResourceBoards()
      .subscribe((boards: ResourceBoardSummary[]) => {
        this.resourceBoards = boards;
      });
  }

  public createResourceBoard(name: string): void {
    this.resourceBoardService.createResourceBoard(name)
      .subscribe((id: string) => {
        if (id !== "") {
          console.log("Successfully created resource board: ", name);
          this.fetchResourceBoards()
        } else {
          console.log("Failed to create resource board: ", name);
        }
      });
  }

  public deleteResourceBoard(id: string): void {
    this.resourceBoardService.deleteResourceBoard(id)
      .subscribe((success: boolean) => {
        if (success) {
          console.log("Successfully deleted resource board: ", id);
          this.fetchResourceBoards()
        } else {
          console.log("Failed to delete resource board: ", id);
        }
      });
  }

  public handleBoardSelection(board: ResourceBoardSummary): void {
    this.router.navigate([board.id], { relativeTo: this.route });
  }

}
