import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";
import { ITEMS } from '../mock-items';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  editable = false;
  items = ITEMS;
  editedItem;
  done: boolean = false;
  doneItem;

  @Input() item: Item;

  @Input() newItem: string;
  @Output() newItemChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.items.splice(0, 1);
  }

  saveItem(editedItem, i) {
    this.editable = !this.editable;
    if (editedItem) {
      this.item.description = editedItem;
      this.item.done = false;
      this.item.editable = true;
    }
  }

  markDone(doneItem) {
    this.item.done = !this.item.done;
    console.log(this.item.done);
    console.log(this.items);
  }

}
