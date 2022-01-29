import { Component, OnInit, Output } from '@angular/core';
import { Element } from '../Interfaces/element';
import { ElementsRow } from '../Interfaces/elements-row';
import { RemapperService } from '../Services/remapper.service';
import { TableService } from '../Services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  localTable: ElementsRow[] = [];

  constructor(
    private tableService: TableService,
    private remapper: RemapperService
  ) {}

  ngOnInit(): void {
    this.tableService.PopulateTable().subscribe((data: any) => {
      next: this.tableService.elements = this.remapper.remap(data);
      this.localTable = this.tableService.GetTable();
      // console.log(this.localTable);
    });
  }

  GetRowspan(rowElement: Element, rowLength: number): number {
    let colspan = 0;
    if (rowElement.symbol == '') {
      colspan = 19 - rowLength;
    }

    return colspan;
  }
}
