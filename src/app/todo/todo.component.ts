import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// import { Item } from '../item';
import { ITEMS } from '../mock-items';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  items = ITEMS;
  item;

  @Input()  newItem: string;
  @Output() newItemChange = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  title = 'Hello World';



  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  hero;
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  deleteItem(i) {
      this.heroes.splice(i,1);
  }



}
