import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';

@Component({
  selector: 'app-right-bar',
  imports: [],
  templateUrl: './right-bar.html',
  styleUrl: './right-bar.css',
  standalone: true
})
export class RightBar implements OnInit {
  protected readonly window = window;
  protected readonly Math = Math;
  http = inject(HttpClient)
  cd = inject(ChangeDetectorRef);
  ip = localStorage.getItem('ip') || '0.0.0.0';
  serverStatus: number = Math.round(Math.random()*(140-30)+30)
  uptime: number = Math.round((Math.random() * (100 - 95) + 95) * 100) / 100;

  async ngOnInit() {
    setInterval(() => {
      this.serverStatus = Math.round(Math.random()*(140-30)+30)
      this.uptime = Math.round((Math.random() * (100 - 95) + 95) * 100) / 100
      this.cd.markForCheck();
    }, 3000)
    this.http.get<any>('https://geolocation-db.com/json/').subscribe(e => {
      this.ip = e.IPv4
      localStorage.setItem('ip', e.IPv4)
      this.cd.markForCheck();
    })
  }
}
