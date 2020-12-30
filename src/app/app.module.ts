import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
