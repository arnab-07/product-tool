import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

    token:any = 'random-string';

    loginFn(usr:any,pass:any) {
      sessionStorage.setItem('token', this.token)
      return this.isAuthenticated()
    }

    logOutFn() {
      sessionStorage.removeItem('token');
      return this.isAuthenticated()
    }

    isAuthenticated() 
    {
        if(sessionStorage.getItem('token') && sessionStorage.getItem('token') == this.token){
            return true
        }
        else
            return false
    }
}
