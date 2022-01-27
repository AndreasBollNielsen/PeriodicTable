import { RemapperService } from './remapper.service';
import { Element } from './../Interfaces/element';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  elements: Element[] = [];

  PopulateTable(): Observable<any> {
    return this.http.get<any>('./assets/Data/PeriodicTableJSON.json');
  }

  GetTable(): Element[] {
    return this.elements;
  }

  constructor(private http: HttpClient) {}
}
