import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart-component',
  imports: [],
  standalone: true,
  providers:[ProductService],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent implements OnInit {

  public productservice = inject(ProductService);
  cartItems:any[] = [];

  ngOnInit(): void {
    
  }
  removeFromCart(id:any){
    console.log(id)
  }
  
}
