import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { ChatComponent } from './shared/component/chat/chat.component';
import { ListComponent } from './shared/component/list/list.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GoalsComponent } from './goals/goals.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'logon',
    component: LogonComponent,
    pathMatch: 'full',
  },
  {
    path: 'chat',
    component: ChatComponent,
    pathMatch: 'full',
  },
  {
    path: 'clienti',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'coach',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'nuove_iscrizioni',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'prenotazioni',
    component: ListComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'prenotazioni/calendario',
        component: ReservationsComponent,
      },
    ],
  },
  {
    path: 'prenotazioni/coach',
    component: ReservationsComponent,
    pathMatch: 'full',
  },
  {
    path: 'esercizi',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'schede',
    component: ListComponent,
  },
  {
    path: 'abbonamenti',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'obiettivi',
    component: GoalsComponent,
    pathMatch: 'full',
  },
  {
    path: 'allenamenti',
    component: WorkoutComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
