import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';
import { Task03Component } from './task03/task03.component';
import { Task04Component } from './task04/task04.component';
import { Task05Component } from './task05/task05.component';
import { Task06Component } from './task06/task06.component';
import { FormsModule } from '@angular/forms';
import { Task08Component } from './task08/task08.component';
import { Task09Component } from './task09/task09.component';
import { Task10Component } from './task10/task10.component';
import { Task11Component } from './task11/task11.component';
import { Task11ChildComponent } from './task11-child/task11-child.component';
import { Task07Component } from './task07/task07.component';

@NgModule({
  declarations: [
    AppComponent,
    Task01Component,
    Task02Component,
    Task03Component,
    Task04Component,
    Task05Component,
    Task06Component,
    Task08Component,
    Task09Component,
    Task10Component,
    Task11Component,
    Task11ChildComponent,
    Task07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
