import { Component } from '@angular/core';

import { ITEMS } from "./mock-items";
import { ItemService } from './item.service';
import { Item } from "./item";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  item: Item;
  items = ITEMS;
  newItem = {};
  editable: boolean[] = [];
  toDoItemsList;
  showAllItems: boolean = false;
  showActiveItems: boolean = false;
  showDoneItems: boolean = false;

  constructor(private itemService: ItemService) { }


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

  showDone() {
    console.log("not in if statement");

    if(this.item.done) { //add to array
      // this.items.push(value);
      console.log("there's a done item");
    }
    // else { //remove from array
      // this.items = this.items.filter(x => x != value);
    //   console.log("nothing's done");
    // }
  }




}
