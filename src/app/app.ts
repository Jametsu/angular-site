import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { DataService, Product, User } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Button,
    Card,
    TableModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tag
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private dataService = inject(DataService);
  
  title = 'Angular Site with PrimeNG';
  products: Product[] = [];
  users: User[] = [];
  loading = true;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.dataService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Error loading products:', err)
    });

    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.loading = false;
      }
    });
  }

  getSeverity(inStock: boolean): 'success' | 'danger' {
    return inStock ? 'success' : 'danger';
  }
}
