import { Component } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  constructor(private itemService: ItemService) { }


}
