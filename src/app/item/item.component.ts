import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';

import { Item } from "../item";
import { ITEMS } from '../mock-items';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'check-indeterminate' } as MatCheckboxDefaultOptions}
  ]
})
export class ItemComponent {

  items = ITEMS;
  editable = false;
  editedItem;
  doneItem;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() newItemChange = new EventEmitter<string>();

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
  }

}
