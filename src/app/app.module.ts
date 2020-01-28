import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { HomeModule } from '../pages/home/home.page.module';
import { ProfileModule } from '../pages/profile/profile.page.module';
import { TasksModule } from '../pages/tasks/tasks.page.module';

import { BackendService } from '../backend/backend.service';
import { NgbdCarouselBasic } from '../components/carousel/carousel-basic';
import { Cards } from '../components/cards/cards';
import { FooterCards } from '../components/footer-cards/footer-cards';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot(),HomeModule,ProfileModule,TasksModule,AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ,NgbdCarouselBasic, Cards,FooterCards],
  bootstrap:    [ 
    AppComponent
],
  providers: [
    BackendService
  ],
  exports:[]
})
export class AppModule { }
