import { Component, inject, OnInit, ChangeDetectorRef, NgZone, signal, Signal } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from "@angular/common";
import { CartService } from '../../services/cart.service';

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
  cartItems: Product[] = [];
  
  ngOnInit(): void {
    this.productService.product().subscribe( response => 
    {
      this.products.set(response.products)
    }
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
