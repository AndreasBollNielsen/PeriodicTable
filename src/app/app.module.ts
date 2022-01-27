import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ElementDetailsComponent } from './element-details/element-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    ListElementComponent,
    ElementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
