import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule } from './burgerservice';

import { BurgersComponent } from './burgers/burgers.component'
import { HttpClientModule }    from '@angular/common/http';

import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
