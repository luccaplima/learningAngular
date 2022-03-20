import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

import { HomePageComponent } from './home-page.component';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
