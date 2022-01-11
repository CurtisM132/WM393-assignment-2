import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {

  @Input() resources: Resource[] = []

  public columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Resource) => `${element.name}`,
    },
    {
      columnDef: 'uploadDate',
      header: 'Upload Date',
      cell: (element: Resource) => `${element.uploadDate}`,
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
      cell: (element: Resource) => `${element.fileFormat}`,
    },
    {
      columnDef: 'comment',
      header: 'Comment',
      cell: (element: Resource) => `${element.comment}`,
    },
  ];
  public displayedColumnsFn = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
