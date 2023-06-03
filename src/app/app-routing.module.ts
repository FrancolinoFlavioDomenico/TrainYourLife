import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { ChatComponent } from './chat/chat.component';
import { CardListComponent } from './shared/component/card-list/card-list.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GoalsComponent } from './goals/goals.component';
import { WorkoutComponent } from './workout-list/workout/workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { UserDetailComponent } from './shared/component/user-detail/user-detail.component';
import { AddExercisesComponent } from './add-exercises/add-exercises.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { SubscriptionComponent } from './subscription/subscription.component';

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
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'clienti/:id',
    component: UserDetailComponent,
  },
  {
    path: 'coach',
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'coach/:id',
    component: UserDetailComponent,
  },
  {
    path: 'nuove_iscrizioni',
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'nuove_iscrizioni/:id',
    component: UserDetailComponent,
  },
  {
    path: 'prenotazioni',
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'prenotazioni/calendario',
    component: ReservationsComponent,
    pathMatch: 'full',
  },
  {
    path: 'prenotazioni/coach',
    component: ReservationsComponent,
    pathMatch: 'full',
  },
  {
    path: 'esercizi',
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'esercizi/:id',
    component: AddExercisesComponent,
    pathMatch: 'full',
  },
  {
    path: 'schede',
    component: CardListComponent,
    children: [
      {
        path: 'dettaglio',
        component: CardDetailComponent,
      },
    ],
  },
  {
    path: 'schede/:id',
    component: CardDetailComponent,
  },
  {
    path: 'abbonamenti',
    component: CardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'abbonamenti/:id',
    component: SubscriptionComponent,
    pathMatch: 'full',
  },
  {
    path: 'obiettivi',
    component: GoalsComponent,
    pathMatch: 'full',
  },
  {
    path: 'allenamenti',
    component: WorkoutListComponent,
    pathMatch: 'full',
  },
  {
    path: 'allenamenti/work',
    component: WorkoutComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
