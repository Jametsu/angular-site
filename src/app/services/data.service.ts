import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  joinedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/data/users.json');
  }
}
