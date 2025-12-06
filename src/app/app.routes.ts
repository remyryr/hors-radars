import { Routes } from '@angular/router';
import {Topic} from './topic/topic';
import {Home} from './home/home';
import {loginGuardGuard} from './login-guard-guard';
import {Login} from './login/login';
import {User} from './user/user';
import {Topics} from './topics/topics';

export const routes: Routes = [
  {path: '', component: Home, canActivate: [loginGuardGuard]},
  {path : 'topic/:id', component: Topic, canActivate: [loginGuardGuard]},
  {path: 'login', component: Login},
  {path: 'user', component: User, canActivate: [loginGuardGuard]},
  {path : 'topics/:id', component: Topics}
];
