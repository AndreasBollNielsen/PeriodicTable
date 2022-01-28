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
    special: false
  };

  constructor(private tableService: TableService) {}

  ngOnInit(): void {}


}
