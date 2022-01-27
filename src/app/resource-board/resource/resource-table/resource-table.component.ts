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

  @Output() downloadResourceEvent = new EventEmitter<Resource>();
  @Output() deleteResourceEvent = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

  // TODO: Use authenication system
  public authenticated = true;

  public dataSource = new MatTableDataSource<Resource>();
  public readonly columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Resource) => `${element.name}`,
    },
    {
      columnDef: 'uploadDate',
      header: 'Upload Date',
      cell: (element: Resource) => `${element.uploadDate.toDateString()}`,
    },
    {
      // TODO: Calculate type from file format
      columnDef: 'type',
      header: 'Type',
      cell: (element: Resource) => `${fileExtensionToFileType(element.fileFormat)}`,
    },
    {
      columnDef: 'fileFormat',
      header: 'File Format',
      cell: (element: Resource) => `${element.fileFormat.toLocaleUpperCase()}`,
    },
    {
      columnDef: 'comment',
      header: 'Comment',
      cell: (element: Resource) => `${element.comment || ''}`,
    },
  ];
  public readonly displayedColumns = this.columns.map(c => c.columnDef);

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // If the user is a tutor then enable the delete column (the delete row button)
    if (this.authenticated) {
      this.displayedColumns.push('delete')
    }

    this.resources.subscribe(resources => {
      this.dataSource.data = resources
    })
  }

  public handleRowClick(row: Resource) {
    this.downloadResourceEvent.emit(row)
  }

  public handleDelete(row: Resource) {
    this.deleteResourceEvent.emit(row.id)
  }
}
