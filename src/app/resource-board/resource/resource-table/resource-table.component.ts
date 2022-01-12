import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Resource } from '../shared/resource.interface';
import { MatTableDataSource, MatRow } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements AfterViewInit, OnInit {

  @Input() resources: Resource[] = []

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
      cell: (element: Resource) => `${element.fileFormat}`,
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
    this.dataSource.data = this.resources;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    if (this.authenticated) {
      this.displayedColumns.push('delete')
    }
  }

  public handleRowClick(row: Resource) {
    console.log("Download resource: ", row.id)
  }
}
