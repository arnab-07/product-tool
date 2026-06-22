import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ProductComponent } from '../product-component/product-component';
import { CartComponent } from '../cart-component/cart-component';

@Component({
  selector: 'app-dashboard',
  imports: [ProductComponent, CartComponent],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  auth = inject(Auth);
  router = inject(Router);
  count = signal(0);

  constructor(public ticket : TicketService){

  }

  ngOnInit(){
    this.ticket.users().subscribe(response => {
      //console.log(response)
    })
  }

  LogOut(){
    this.auth.logOutFn();
    this.router.navigate(['/']);
  }

}
