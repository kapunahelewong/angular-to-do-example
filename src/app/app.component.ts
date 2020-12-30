import { Component } from '@angular/core';

import { ITEMS } from "./mock-items";
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To Do List';
  item: Item;
  items = ITEMS;
  newItem = {};
  toDoItemsList;
  showAllItems: boolean = false;
  showActiveItems: boolean = false;
  showDoneItems: boolean = false;

  // for applying CSS class with ngClass
  all: boolean = false;
  active: boolean = false;
  done: boolean = false;

  addItem(newItem) {
    if (newItem) {
      newItem = {
        description: newItem,
        done: false,
        editable: true
      }
      this.items.unshift(newItem);
    }
  }

  styleButtonAll() {
    this.all = true;
    this.active = false;
    this.done = false;
  }

  styleButtonToDo() {
    this.all = false;
    this.active = true;
    this.done = false;
  }
  styleButtonDone() {
    this.all = false;
    this.active = false;
    this.done = true;
  }
}
