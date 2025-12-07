import { Routes } from '@angular/router';
import {Topic} from './topic/topic';
import {Home} from './home/home';
import {loginGuardGuard} from './login-guard-guard';
import {Login} from './login/login';
import {User} from './user/user';
import {Topics} from './topics/topics';
import {Building} from './building/building';
import {Refused} from './refused/refused';

export const routes: Routes = [
  {path: '', component: Home, canActivate: [loginGuardGuard]},
  {path : 'topic/:id', component: Topic, canActivate: [loginGuardGuard]},
  {path: 'login', component: Login},
  {path: 'user', component: User, canActivate: [loginGuardGuard]},
  {path : 'topics/:id', component: Topics},
  {path : 'announcement', component: Building},
  {path : 'news', component: Building},
  {path : 'off-topic', component: Building},
  {path : 'private', component: Refused},
  {path : 'admin', component: Refused},
  {path: 'who', component: Building},
  {path: 'help', component: Building}
];
