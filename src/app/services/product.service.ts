import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    thumbnail: string
}

interface ProductResponse {
    products : Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    public http = inject(HttpClient);

    public product():Observable<ProductResponse>{
        return this.http.get<ProductResponse>('https://dummyjson.com/products');
    }
   
}
