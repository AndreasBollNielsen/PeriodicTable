import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  categories: string[] =["diatomic nonmetal","alkali metal","noble gas","transition metal","alkaline earth metal","metalloid","polyatomic nonmetal","post-transition metal","lanthanide","actinide",];

  constructor() { }

  ngOnInit(): void {
  }

}
