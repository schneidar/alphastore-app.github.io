import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppreilComponent } from './appreil/appreil.component';
import { DatePipe } from '@angular/common';

import { AppreilService } from './services/appreil.service';
import { AuthComponent } from './auth/auth.component';
import { AppreilViewComponent } from './appreil-view/appreil-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppreilComponent,
    AuthComponent,
    AppreilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    AppreilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
