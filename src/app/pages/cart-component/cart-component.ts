import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-component',
  imports: [],
  standalone: true,
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent implements OnInit {

  public productservice = inject(ProductService);
  public cartservice = inject(CartService);
  public cartItems = signal<CartItem[]>([]);
  cartValue: number = <number>0;

  ngOnInit(): void {
    this.cartservice.items.subscribe(response => {
      this.cartItems.set(response);
      this.cartValue = response.reduce((previousItem, currentItem) => 
      {
        return previousItem + (currentItem.quantity * currentItem.price);
      },0.00)
    })
  }
  
}
