import {ChangeDetectorRef, Component, inject, NgZone, OnChanges, SimpleChanges} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {interval, take, tap, timeout} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  model = new User('','')
  router = inject(Router)
  ngZone = inject(NgZone)
  cd = inject(ChangeDetectorRef);
  logged: boolean = false
  time = 5000;
  onSubmit() {
    if(this.model.username === "a" && this.model.password === "a"){
      localStorage.setItem('logged', 'true')
      this.logged = true
      interval(40)
        .pipe(
          take(80),
          tap(() => {
              this.time-=62
              this.cd.markForCheck();
          })
        )
        .subscribe({
          complete: () => this.router.navigate(['/'])
        });
    }
  }
}

export class User {
  constructor(
    public  username: string,
    public password: string,
  ) {
  }
}
