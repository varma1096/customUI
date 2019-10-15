import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormDisplayComponent } from './form-display/form-display.component';



@NgModule({
  declarations: [
    AppComponent,
    
    FormDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    HttpClientModule,
    FormsModule
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

