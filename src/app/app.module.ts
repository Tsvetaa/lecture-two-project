import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  //Templates specific items
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule // this includes CommonModule
  ],
  providers: [],  // used for Dependency Injection
  bootstrap: [AppComponent] //the components from index.html
})
export class AppModule { }
