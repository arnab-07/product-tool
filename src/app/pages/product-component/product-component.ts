import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent implements OnInit {

  productService = inject(ProductService);
  products: Product[] = [];
  cartItems: Product[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.productService.product().subscribe( response => 
    {
      this.products = response.products
      this.cdr.detectChanges();
    }
    );
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    console.log('Cart Items:', this.cartItems);
  }
}
