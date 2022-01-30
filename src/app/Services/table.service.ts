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
    //get data from local Json file
    // return this.http.get<any>('./assets/Data/PeriodicTableJSON.json');

    //get data from Rest API
    return this.http.get<any>('http://localhost:3000/repos');
  }

  GetTable(): ElementsRow[] {
    return this.elements;
  }

  GetElementInfo(period: number, elementNum: number) {
    let info: Element;
    let counter = 1;

    if(period > 0 && elementNum > 0)
    {
      let row = this.elements[period - counter].PeriodRow;

      for (let element of row) {
        if (element.number == elementNum) {
          info = element;
          this.callback.next(info);
          break;
        }
      }
    }

  }

  //Deselection.. not yet implemented
  // Deselect()
  // {
  //   let empty:Element = {name: '',
  //   number: 0,
  //   period: 0,
  //   symbol: '',
  //   atomic_mass: 0,
  //   category: "",
  //   special: false}
  //    this.callback.next(empty);
  // }
  constructor(private http: HttpClient) {}
}
