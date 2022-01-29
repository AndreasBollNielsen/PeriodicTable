import { TableService } from './../Services/table.service';
import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../Interfaces/element';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css'],
})
export class ListElementComponent implements OnInit {
  @Input() elementData: Element = {
    name: '',
    atomic_mass: 0,
    number: 0,
    period: 0,
    symbol: '',
    category: '',
    special: false,
  };
  hover: boolean = false;
  @Input() selected: boolean = false;

  constructor(private tableService: TableService) {

  }

  ngOnInit(): void {
    this.tableService.callback.subscribe(() => {
      next: if (this.hover) {
        this.selected = true;
      } else {
        if (this.selected) {
          this.selected = false;
        }
      }
    });

    if(this.elementData.symbol == '71')
    {
      this.elementData.symbol = '71-89';
    }
    else if(this.elementData.symbol == '103')
    {
      this.elementData.symbol = '89-103';
    }

  }

  GetDetails() {
    let period = this.elementData.period;
    let number = this.elementData.number;
    if (this.elementData.special) {
      period = period +2;
    }

    if(this.elementData.symbol.length < 3)
    {
      this.tableService.GetElementInfo(period, number);
    }
  }


}
