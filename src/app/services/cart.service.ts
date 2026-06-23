import { Injectable, Service } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Product } from '../services/product.service';

export interface CartItem extends Product {
  quantity: number
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItems = new BehaviorSubject<CartItem[]>([]);
    public items = this.cartItems.asObservable();

    public addToCart(product: Product) {

        const items = this.getCartItems();
        const existingItem = items.find(
            item => item.id === product.id
        );

        if (existingItem) {
            existingItem.quantity++;
            this.cartItems.next([...items]);
        } else {
            this.cartItems.next([
                ...items,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    }

    public getCartItems(){
        return this.cartItems.getValue();
    }
}
