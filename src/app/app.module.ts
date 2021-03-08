import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponentComponent} from './book-component/book-component.component';
import {BookFormComponent} from './book-component/book-form/book-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
