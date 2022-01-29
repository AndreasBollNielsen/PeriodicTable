import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementsRow } from '../Interfaces/elements-row';
import { Element } from './../Interfaces/element';

@Injectable({
  providedIn: 'root',
})
export class RemapperService {
  constructor() {}

  remap(data: any): ElementsRow[] {
    let remapped: Element[] = [];
    let specialElements: Element[] = [];
    for (let element of data.elements) {
      const remappedElement: Element = {
        name: element.name,
        atomic_mass: element.atomic_mass,
        number: element.number,
        period: element.period,
        symbol: element.symbol,
        category: element.category,
        special: false
      };

      //filter special elements
      if (remappedElement.number == 57 || remappedElement.number == 89) {
        let deepcopy = JSON.parse(JSON.stringify(remappedElement));
        specialElements.splice(0, 0, deepcopy);
      }

      if (
        remappedElement.number <= 57 ||
        (remappedElement.number > 71 && remappedElement.number <= 89) ||
        remappedElement.number > 103
      ) {
        remapped.push(remappedElement);
      } else {
        let deepcopy = JSON.parse(JSON.stringify(remappedElement));
        deepcopy.special = true;
        specialElements.push(deepcopy);
      }

      //add categories to temp

    }

    let nestedTable: ElementsRow[] = [];

    for (let index = 0; index < 7; index++) {
      let temp: Element[] = [];
      let period = index + 1;

      for (let element of remapped) {
        if (element.period == period) {
          temp.push(element);

          //add empty cells
          if ( element.symbol == 'H' ||element.symbol == 'Be' || element.symbol == 'Mg') {
            let newelement: Element = {
              name: '',
              number: 0,
              period: 0,
              symbol: '',
              atomic_mass: 0,
              category: "",
              special: true
            };
            temp.push(newelement);
          }

          if (element.number == 57 || element.number == 89) {
            let deepcopy = JSON.parse(JSON.stringify(element));
            element.symbol = 'X';
          }
        }
      }

      //add row to array
      let rowElements: ElementsRow = { PeriodNumber: period, PeriodRow: temp };
      nestedTable.push(rowElements);
    }

    //add special rows
    for (let index = 0; index < 2; index++) {
      let temp: Element[] = [];
      let period = index + 6;

      for (let element of specialElements) {
        if (element.period == period) {
          element.special = true;
          temp.push(element);
        }
      }

      //add empty
      let newelement: Element = {
        name: '',
        number: 0,
        period: 0,
        symbol: '',
        atomic_mass: 0,
        category: "",
        special: true
      };
      temp.splice(0,0,newelement);

      let rowElements: ElementsRow = { PeriodNumber: period, PeriodRow: temp };
      nestedTable.push(rowElements);
    }

    // console.log(nestedTable);
    return nestedTable;
  }
}
