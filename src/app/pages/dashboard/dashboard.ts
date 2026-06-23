import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { ProductComponent } from '../product-component/product-component';
import { CartComponent } from '../cart-component/cart-component';

@Component({
  selector: 'app-dashboard',
  imports: [ProductComponent, CartComponent],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  auth = inject(Auth);
  router = inject(Router);

  LogOut(){
    this.auth.logOutFn();
    this.router.navigate(['/']);
  }

}
