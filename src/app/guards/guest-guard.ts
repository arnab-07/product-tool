import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = () => {
  
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    console.log('test')
      return router.createUrlTree(['/dashboard'])
  }
  else{
    return true;
  }
};
