import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 selectedHero: Hero;

  constructor() { }
  hero : Hero ={
    id : 1,
    name : 'Shubham'
  }

  heroes = HEROES ;
  ngOnInit() {
  }


 
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}