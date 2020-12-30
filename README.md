# To do App WIP

## Setup

The fastest and easiest way to get into developing Angular applications is to use the [Angular CLI](https://cli.angular.io/).
The Angular CLI is a tool which you can use to run commands in your terminal for generating and building Angular applications.
To install the Angular CLI, run the following command in your terminal.

```
npm install -g @angular/cli
```

Angular CLI commands all start with `ng`, followed by what you'd like the CLI to do.
Use the following `ng new` command to create a new application called `todo`:

```
ng new todo
```

As the CLI create your new application, you receive two configuration prompts:

1. Whether you would like routing.
  You can say `no` as this application does not use routing.
1. Whether or not you would like to use a CSS preprocessor.
  To use the styles that this tutorial provides, choose SCSS.
  You can choose plain CSS or another preprocessor, but you will need to refactor the CSS.

The `ng new` command creates a minimal Angular application, which you can edit and expand.
Navigate into your new project with the following `cd` command:

```
cd todo
```

To run your `todo` application, use `ng serve`.

```
ng serve
```

Navigate to `http://localhost:4200/` to see your new application.
If you change any of the source files, the application automatically reloads.

The application source files this tutorial guides you through editing are in `src/app`.
Key files that the CLI generates automatically include the following:

1. `app.module.ts`: specifies the files your application uses.
1. `app.component.ts`: Contains the logic for your application's main page, also known as a view.
1. `app.component.html`: contains the HTML for the `AppComponent`. The contents of this file are also known as the template.
1. `app.component.scss`: contains the HTML for the `AppComponent`.

A component in Angular is made up of three main parts&mdash;HTML, styles, and the class.
For example, `app.component.ts`, `app.component.html`, and `app.component.scss` together constitute the `AppComponent`.
The Angular CLI also generates a file for component testing called `app.component.spec.ts`, but this tutorial doesn't go into testing, so you can disregard that file.

Whenever you generate a component, the CLI creates these four files  in a directory with the name you provide in the command.

### Install Angular Material

With [Angular Material](https://material.angular.io/), you can quickly add accessible and customizable styles to your application.

In the `todo` directory, run the following command to install Angular Material:

```
ng add @angular/material
```

When you are prompted about sharing usage data with the Angular Team, you can answer yes or no.
Neither answer has any affect the development of your application.

The next prompt gives you a choice of prebuilt themes.
This tutorial uses the deep purple and amber theme.

When you were prompted about the global typography styles, choose yes.

In response to the animations prompt, choose no.

For the buttons and checkboxes the to do list uses later, prepare to style them by importing `MatButtonModule` and `MatCheckboxModule` into the `AppModule` as in the following excerpt.

```ts
...

// Add the JavaScript imports
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

...

@NgModule({
 ...
  imports: [
    BrowserModule,
    MatCheckboxModule, // Add the checkbox and button modules
    MatButtonModule    // to the imports array
  ],
...
})
export class AppModule { }
```

By adding these imports to your `AppModule`, you make the Material checkbox and button modules available throughout your application.

### Create items for your list

Create a new file with the name `item.ts` with the following contents:

```ts

export interface Item {
  description: string;
  done?: boolean;
  editable?: boolean;
}

```

The item interface creates an `item` object model so that your application understands what an `item` is.
For this to do list, an `item` is an object that has a description, can be marked done or not, and is editable.

Save `item.ts` in the `app` directory.

Create a new file with the name `mock-items.ts` with the following contents:

```ts

import { Item } from './item';

export const ITEMS: Item[] = [
      { description: 'organize variable collection',
        done: true,
        editable: true
      },
      { description: 'build Angular app',
        done: false,
        editable: true
      },
      { description: 'contribute to repo',
        done: false,
        editable: true
      },
      { description: 'go to favorite conf',
        done: false,
        editable: true
      }
    ];
```

Save `mock-items.ts` in the `app` directory.

At the top, `mock-items.ts` imports the `Item` interface, which determines the shape of each object in the `item` array.
When you use or create items, Angular now expects each item to have a `description`, `done`, and `editable` property.

## Setup the HTML

In `app.component.html`, replace the default placeholder markup with the following HTML.

```html

<div class="main">

  <h2><label for="addItemInput">What would you like to do today?</label></h2>
  <input #newItem
    placeholder="add an item"
    (keyup.enter)="addItem(newItem.value)"
    class="lg-text-input"
    id="addItemInput">

  <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>

</div>

```

This HTML adds the following:

* A header for your application
* An input for the user to type in new to do items
* A button that on click passes what the user typed to an `addItem()` method


In `app.component.ts`, import the two items files.

```ts
import { ITEMS } from "./mock-items";
import { Item } from "./item";

```

Still in `app.component.ts`, add properties for `item` and `items` so that the app component understands what an individual item is and the items array.

```
...

export class AppComponent {
  item: Item;
  items = ITEMS;
}

```

Beneath the `item` and `items` properties, add an `addItem()` method that takes a string the user enters, creates a new item with it, and adds the new `item` to the `items` array.

```
...

export class AppComponent {
  item: Item;
  items = ITEMS;

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

```

## Create a component for the items list

Components provide a way for you to compartmentalize functionality and styles in your application.
The `AppComponent` serves as a shell for the application.
This section walks you through creating a component to handle displaying, adding to, and deleting items from the items list.

Create a component named `items`.

```
ng generate component item
```

The `ng generate component` command creates a component and folder with the name you specify.
Here, the folder and component name is `item`.
You can find the `item` directory within the `app` folder.

At the top of `app/item/item.component.ts`, import `Item` and `ITEMS`:

```
import { Item } from "../item";
import { ITEMS } from '../mock-items';
```

Add `items`, `doneItem`, and `editable` properties to the `ItemComponent` class.

```
export class ItemComponent implements OnInit {
  items = ITEMS;
  doneItem;
  editable = false;
  ...
}
```

The `items` property contains the `ITEMS` array.
The `items` property refers to data that you'll pass in `items.component.html` in just a  moment.
The default setting for the `editable` property is `false`, because the section of your template hides by default and only shows if the user clicks to display it.

To facilitate communication between your two components, add `Input`, `Output`, and `EventEmitter` to the imports from '@angular/core'.

```
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
```

At the top of the class, add two `@Input()` properties and an `@Output()`.

```
export class ItemComponent implements OnInit {
  editable = false;
  items = ITEMS;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() newItemChange = new EventEmitter<string>();
  ...
}
```

An `@Input()` acts as a doorway for data to come into the `ItemComponent`, while an `@Output()` serves as a doorway for data to go out of the `ItemComponent`.
For a component to send data out, its `@Output()` property must be a new `EventEmitter` because the component raises an event when there is data to share with another component.

To use the `ItemComponent` in another component, use its selector.
Angular specifies the selector of a component in the metadata of `@Component().
In this example, the selector is `app-item`.

```
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
```

To use the `ItemComponent` selector within the `AppComponent`, use its selector, `<app-item>` in `app.component.html`.
Add the following to the bottom of `app.component.html`.

```
  <h2>{{items.length}} items remaining</h2>

  <div>
    <ul>
      <li *ngFor="let item of items; let i=index">
        <app-item [item]="item" ></app-item>
      </li>
    </ul>
  </div>
```

This HTML uses Angular's repeater directive, `*ngFor`, to iterate over all of the items in the `items` array.
For each `item`, Angular repeats the element where the `*ngFor` resides.
Here, Angular repeats the `<li>` and everything within it, which includes `<app-item>`.

## Add styles






