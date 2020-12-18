import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo1';

  filter: 'all' | 'active' | 'done' = 'all';
  
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
