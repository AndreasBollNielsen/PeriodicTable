import { Component, OnInit } from '@angular/core';
import { Element } from '../Interfaces/element';
import { RemapperService } from '../Services/remapper.service';
import { TableService } from '../Services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  localTable: Element[] = [];


  constructor(
    private tableService: TableService,
    private remapper: RemapperService
  ) {}

  ngOnInit(): void {
    let elements;
    this.tableService.PopulateTable().subscribe((data: any) => {
      next: this.tableService.elements = this.remapper.remap(data);
      this.localTable = this.tableService.GetTable();
      console.log(this.localTable);
    });
  }
}
