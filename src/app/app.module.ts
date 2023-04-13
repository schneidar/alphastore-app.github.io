import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppreilComponent } from './appreil/appreil.component';
import { DatePipe } from '@angular/common';

import { AppreilService } from './services/appreil.service';
import { AuthComponent } from './auth/auth.component';
import { AppreilViewComponent } from './appreil-view/appreil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppreilComponent } from './single-appreil/single-appreil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppreilComponent } from './edit-appreil/edit-appreil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'appreils', canActivate: [AuthGuard] ,component : AppreilViewComponent},
  { path: 'appreils/:id', canActivate: [AuthGuard] , component : SingleAppreilComponent},
  { path: 'edit', canActivate: [AuthGuard] ,component:EditAppreilComponent},
  { path: 'auth', component : AuthComponent},
  { path: 'users', component: UserListComponent},
  { path: 'new-user', component:NewUserComponent},
  { path: '', component : AppreilViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppreilComponent,
    AuthComponent,
    AppreilViewComponent,
    SingleAppreilComponent,
    FourOhFourComponent,
    EditAppreilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DatePipe,
    AppreilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [
    AppComponent,
    MonPremierComponent,
    AppreilComponent,
    AuthComponent,
    AppreilViewComponent
  ]
})
export class AppModule { }
