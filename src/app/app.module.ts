import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NumberService } from './number.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { D3Component } from './d3/d3.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    D3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
