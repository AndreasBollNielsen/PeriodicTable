import { Element } from './../Interfaces/element';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ElementsRow } from '../Interfaces/elements-row';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  elements: ElementsRow[] = [];
  callback = new Subject<Element>();

  PopulateTable(): Observable<any> {
    return this.http.get<any>('./assets/Data/PeriodicTableJSON.json');
  }

  GetTable(): ElementsRow[] {
    return this.elements;
  }

  GetElementInfo(period: number, elementNum: number) {
    let info: Element;
    let counter = 1;

    let row = this.elements[period - counter].PeriodRow;

    for (let element of row) {
      if (element.number == elementNum) {
        info = element;
        this.callback.next(info);
        break;
      }
    }
  }

  constructor(private http: HttpClient) {}
}
