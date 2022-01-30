import { Component, Input, ViewChild, AfterViewInit, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Resource } from '../shared/resource.interface';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() resources: Observable<Resource[]>;

  @Output() resourceClickedEvent = new EventEmitter<Resource>();
  @Output() deleteResourceEvent = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

  public isTutor: boolean = false;

  public dataSource = new MatTableDataSource<Resource>();
  public readonly columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (resource: Resource) => `${resource.name}`,
    },
    {
      columnDef: 'uploadDate',
      header: 'Upload Date',
      cell: (resource: Resource) => `${resource.uploadDate.toDateString()}`,
    },
    {
      columnDef: 'type',
      header: 'Type',
      cell: (resource: Resource) => `${resource.fileType}`,
    },
    {
      columnDef: 'fileFormat',
      header: 'File Format',
      cell: (resource: Resource) => `${resource.fileFormat.toLocaleUpperCase()}`,
    },
    {
      columnDef: 'comment',
      header: 'Comment',
      cell: (resource: Resource) => `${resource.comment || ''}`,
    },
  ];
  public readonly displayedColumns = this.columns.map(c => c.columnDef);

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.authenticationService.haveRoles$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(haveRoles => {
        if (haveRoles) {
          this.isTutor = this.authenticationService.isTutor();
          // If the user is a tutor then enable the delete column (the delete row button)
          if (this.isTutor) {
            this.displayedColumns.push('delete');
          }
        } else {
          this.isTutor = false;
        }
      });

    this.resources.subscribe(resources => {
      this.dataSource.data = resources;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  public handleRowClick(row: Resource): void {
    this.resourceClickedEvent.emit(row);
  }

  public handleDelete(row: Resource): void {
    this.deleteResourceEvent.emit(row.id);
  }
}
