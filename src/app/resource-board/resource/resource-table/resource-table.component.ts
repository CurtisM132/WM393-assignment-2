import { Component, Input, ViewChild, AfterViewInit, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() resources: Observable<Resource[]>;
  @Input() displayDeleteButton: boolean = false;
  @Input() canEditComment: boolean = false;

  @Output() resourceClickedEvent = new EventEmitter<Resource>();
  @Output() deleteResourceEvent = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

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
  ];
  public readonly displayedColumns = [...this.columns.map(c => c.columnDef), "comment"];

  private dataSource = new MatTableDataSource<Resource>();

  private destroyed$: Subject<void> = new Subject<void>();

  constructor() { }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    if (this.displayDeleteButton) {
      this.displayedColumns.push('delete');
    }

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
