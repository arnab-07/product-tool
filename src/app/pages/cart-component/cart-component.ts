import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

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
  public cartItems = signal<Product[]>([]);

  ngOnInit(): void {
    this.cartservice.items.subscribe(response => {
      this.cartItems.set(response);
    })
  }
  removeFromCart(id:any){
    console.log(id)
  }
  
}
