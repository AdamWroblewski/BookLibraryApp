import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponentComponent} from './book-component/book-component.component';
import {BookFormComponent} from './book-component/book-form/book-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: BookComponentComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookComponentComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
