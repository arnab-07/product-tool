import { Component, inject, OnInit, ChangeDetectorRef, NgZone, signal, Signal } from '@angular/core';
import { ProductService, Product, ProductView } from '../../services/product.service';
import { CommonModule } from "@angular/common";
import { CartService } from '../../services/cart.service';
import { combineLatest, filter, map, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent implements OnInit {

  productService = inject(ProductService);
  cartService = inject(CartService);
  products = signal<Product[]>([]);
  makeObs = toObservable(this.products);
  filteredProducts = signal<ProductView[]>([]);
  
  ngOnInit(): void {
    this.productService.product().subscribe( response => 
    {
      this.products.set(response.products)
    });

    combineLatest(
      [this.makeObs, this.cartService.items]).pipe(
        map(([products,cartItems]) => {
          return products.map(product => {
              const cartItem = cartItems.find(item => item.id === product.id);
              const hasInCart = cartItems.some(item => item.id === product.id);
              return {
                ...product,
                inCart : hasInCart,
                quantity: cartItem?.quantity ?? 0
              }
          })
        })
      ).subscribe(res => this.filteredProducts.set(res));

      
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  decreaseQuantity (product:Product) : void {
      const items = this.cartService.getCartItems();
      const existingItem = items.find(
          item => item.id === product.id
      );
      if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity--;
          this.cartService.cartItems.next([...items]);
      }
      else if(existingItem && existingItem.quantity == 1) {
          const updatedItems = items.filter(item => item.id !== product.id)
          this.cartService.cartItems.next(updatedItems);
      }
  }

  increaseQuantity(product:Product) : void{
     this.addToCart(product);
  }
}
