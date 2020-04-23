import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GetComponent } from './get/get.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyAppService } from './my-app.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, SlimLoadingBarModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, GetComponent, AddComponent, EditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyAppService]
})
export class AppModule { }
