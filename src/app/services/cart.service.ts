import { Injectable, Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../services/product.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItems = new BehaviorSubject<Product[]>([]);
    public items = this.cartItems.asObservable();

    public addToCart(product:Product){
        this.cartItems.next([
            ...this.getCartItems(),
            product
        ]);

        // console.log(this.cartItems);
    }

    public getCartItems(){
        return this.cartItems.getValue();
    }
}
