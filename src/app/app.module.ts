import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SessionStorageService } from 'angular-web-storage';
import { MaterialModule } from './shared/material/material.module';
import { ConfimModalComponent } from './shared/component/confim-modal/confim-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoService } from './shared/service/user-info.service';
import { ProfileSectionComponent } from './shared/component/profile-section/profile-section.component';
import { ChatComponent } from './chat/chat.component';
import { CardListComponent } from './shared/component/card-list/card-list.component';
import { ListService } from './shared/service/list.service';
import { ReservationsComponent } from './reservations/reservations.component';
import { GoalsComponent } from './goals/goals.component';
import { WorkoutComponent } from './workout-list/workout/workout.component';
import { UserDetailComponent } from './shared/component/user-detail/user-detail.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { AddReservationModalComponent } from './reservations/add-reservation-modal/add-reservation-modal.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { PagamentiComponent } from './pagamenti/pagamenti.component';
import { TitlePageBarComponent } from './shared/component/title-page-bar/title-page-bar.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogonComponent,
    NavbarComponent,
    ConfimModalComponent,
    ProfileSectionComponent,
    ChatComponent,
    CardListComponent,
    ReservationsComponent,
    GoalsComponent,
    WorkoutComponent,
    UserDetailComponent,
    SubscriptionComponent,
    WorkoutListComponent,
    AddReservationModalComponent,
    PagamentiComponent,
    TitlePageBarComponent,
    CardDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatTimepickerModule,
  ],
  providers: [
    SessionStorageService,
    UserInfoService,
    ListService,
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
