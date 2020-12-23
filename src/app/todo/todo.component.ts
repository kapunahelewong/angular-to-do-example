import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ITEMS } from '../mock-items';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  items = ITEMS;
  item;

  done: boolean = false;

  todoItem;

  name = new FormControl('');

  doneItem;
  i;
  toggledItem;


  @Input()  newItem: string;
  @Output() newItemChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Hello World';

  heroes = ['build Angular application', 'organize variable collection', 'install Angular CLI', 'check out Angular Material'];
  hero;

  editedItem;
  editable = false;
  editableItem: FormGroup;

  hi = false;


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.unshift(newHero);
    }
  }
  deleteItem(i) {
      this.heroes.splice(i,1);
  }

  editToggle(toggledItem, i) {

    // this.toggledItem = !this.toggledItem;
    this.editable = !this.editable;
    console.log("i: ", i);
  }

  saveItem(editedItem, i) {
    this.editable = !this.editable;
    console.log("editedItem ", editedItem);
    console.log(this.heroes);

    if (editedItem) {
      this.heroes[i] = editedItem;
    }
    console.log("editedItem ", editedItem);
    console.log(this.heroes[i]);
  }

  showDone(doneItem, i) {

    if (this.doneItem, i) {
      console.log(this.doneItem);
    }

  }

  markDone(doneItem, i) {
    this.done = !this.done;
  }

}
