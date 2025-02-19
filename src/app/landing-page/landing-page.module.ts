import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { AppRoutingModule } from 'app/app.routing.module';
import { ChatModalModule } from 'app/chat-modal/chat-modal.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChatModalModule
  ]
})
export class LandingPageModule { }
