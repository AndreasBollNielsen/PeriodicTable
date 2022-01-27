import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Element } from './../Interfaces/element';

@Injectable({
  providedIn: 'root',
})
export class RemapperService {
  constructor() {}

  remap(data: any): Element[] {
    let remapped: Element[] = [];

    for(let element of data.elements){

      const remappedElement: Element = {
        name: element.name,
        atomic_mass: element.atomic_mass,
        number: element.number,
        period: element.period,
        symbol: element.symbol,
      };
      remapped.push(remappedElement);
    }
    // console.log(remapped);

    return remapped;
  }
}
