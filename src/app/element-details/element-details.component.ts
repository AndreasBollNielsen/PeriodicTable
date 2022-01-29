import { TableService } from './../Services/table.service';
import { Component, OnInit } from '@angular/core';
import { Element } from '../Interfaces/element';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  categories: string[] =["diatomic nonmetal","alkali metal","noble gas","transition metal","alkaline earth metal","metalloid","polyatomic nonmetal","post-transition metal","lanthanide","actinide",];
elementInfo: Element;

  constructor(private dataService: TableService) {
    this.elementInfo = {name:"",number: 0,atomic_mass: 0,period:0,symbol:"",special: false,category:""};
   }

  ngOnInit(): void {

    this.dataService.callback.subscribe((data: Element)=>{
      next: this.elementInfo = data;
      console.log(this.elementInfo);

    })

  }

}
