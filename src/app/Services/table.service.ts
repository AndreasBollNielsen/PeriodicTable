import { RemapperService } from './remapper.service';
import { Element } from './../Interfaces/element';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ElementsRow } from '../Interfaces/elements-row';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  elements: ElementsRow[] = [];
  testlist: string[] = ['test', 'test2'];
  PopulateTable(): Observable<any> {
    return this.http.get<any>('./assets/Data/PeriodicTableJSON.json');
  }

  GetTable(): ElementsRow[] {
    return this.elements;
  }

  GetElementInfo()
  {
    
  }

  constructor(private http: HttpClient) {}
}
