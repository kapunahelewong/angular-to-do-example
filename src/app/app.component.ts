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



}
