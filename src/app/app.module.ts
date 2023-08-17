import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPanelComponent } from './books-panel/books-panel.component';
import { BookPanelComponent } from './books-panel/book-panel/book-panel.component';
import { PanelHeaderComponent } from './books-panel/panel-header/panel-header.component';
import { BookModalComponent } from './books-panel/book-modal/book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPanelComponent,
    BookPanelComponent,
    PanelHeaderComponent,
    BookModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
