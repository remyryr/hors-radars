import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(localStorage.getItem('logged') === 'true')
    return true;
  else {
    router.navigate(['/login']);
    return false;
  }
}
