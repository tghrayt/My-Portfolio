import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';
import {AnimationModule} from "./animation/animation.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AnimationModule
  ],
  providers: [ { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
