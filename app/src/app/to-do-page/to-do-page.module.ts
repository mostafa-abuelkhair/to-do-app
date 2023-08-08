import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoPageRoutingModule } from './to-do-page-routing.module';
import { ToDoPageComponent } from './to-do-page.component';


@NgModule({
  declarations: [
    ToDoPageComponent
  ],
  imports: [
    CommonModule,
    ToDoPageRoutingModule
  ]
})
export class ToDoPageModule { }
