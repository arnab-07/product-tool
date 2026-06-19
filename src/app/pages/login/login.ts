import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {

    username = '';
    password = '';
    auth = inject(Auth);
    router = inject(Router);

    // constructor(private auth: Auth){}

    loginFn() {
      this.auth.loginFn(this.username, this.password);
      this.router.navigate(['/dashboard']);
    }
}
