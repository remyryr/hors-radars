import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  router = inject(Router)
  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
