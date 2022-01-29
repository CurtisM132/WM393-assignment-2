import { Component, Input, ViewChild, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { Resource } from '../shared/resource.interface';
import { fileExtensionToFileType } from '../shared/resource-file.enums';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements AfterViewInit, OnInit {

  @Input() resources: Observable<Resource[]>;

  @Output() resourceClickedEvent = new EventEmitter<Resource>();
  @Output() deleteResourceEvent = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

  // TODO: Use authenication system
  public authenticated = true;

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

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // If the user is a tutor then enable the delete column (the delete row button)
    if (this.authenticated) {
      this.displayedColumns.push('delete');
    }

    this.resources.subscribe(resources => {
      this.dataSource.data = resources;
    })
  }

  public handleRowClick(row: Resource): void {
    this.resourceClickedEvent.emit(row);
  }

  public handleDelete(row: Resource): void {
    this.deleteResourceEvent.emit(row.id);
  }
}
