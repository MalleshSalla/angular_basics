import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms'; //This mudule is imported for avoding "Property 'username' does not exist on type 'AppComponent'"
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   //This mudule is imported for avoding "Property 'username' does not exist on type 'AppComponent'"
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
