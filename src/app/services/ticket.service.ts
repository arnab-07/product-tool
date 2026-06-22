import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';

interface User {
    id: number,
    firstName: string,
    lastName: string,
}

export interface UserResponse {
    count: number;
    users: User[];
}

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(private http: HttpClient) {}

    users(): Observable <UserResponse>{
        return this.http.get<UserResponse>('https://dummyjson.com/users').pipe(
        map(response => 
            ({
            count: response.users.length,
            users: response.users
            })
        ),
        take(1)
    )}
}
