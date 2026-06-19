import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { map, of, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [],
  providers: [TicketService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  auth = inject(Auth);
  router = inject(Router);

  constructor(public ticket : TicketService){

  }

  ngOnInit(){
    this.ticket.users().subscribe(
      value => {
        console.log(value)
      },
      error => {}
    )
  }

  LogOut(){
    this.auth.logOutFn();
    this.router.navigate(['/']);
  }

}
