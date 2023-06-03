import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { ChatComponent } from './shared/component/chat/chat.component';
import { PeopleListComponent } from './shared/component/people-list/people-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'clienti',
    component: PeopleListComponent,
  },
  {
    path: 'coach',
    component: PeopleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
