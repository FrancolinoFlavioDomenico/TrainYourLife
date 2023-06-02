import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionStorageService } from 'angular-web-storage';
import { MaterialModule } from './material/material.module';
import { BaseComponentComponent } from './shared/base-component/base-component.component';
import { ConfimModalComponent } from './shared/confim-modal/confim-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoService } from './shared/service/user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogonComponent,
    NavbarComponent,
    BaseComponentComponent,
    ConfimModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SessionStorageService, UserInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
