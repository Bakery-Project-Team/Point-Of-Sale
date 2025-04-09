import { Component, OnInit } from '@angular/core';
 import { IonicModule } from '@ionic/angular';
 import { CommonModule } from '@angular/common';
 import { UsersComponent } from '../components/users/users.component';
import { StorageService } from '../services/storage.service';
import { Invoice } from '../models/invoice';


 @Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
 standalone: true,
 imports: [IonicModule, CommonModule, UsersComponent ],
 })

 export class HomePage implements OnInit {
 constructor(private storage: StorageService) {}

invoices: any[] = [];

  bakeryItems = [
    { 
      name: 'Coconut Bread', 
      price: 15.00, 
      quantity: 0
    },
    { 
      name: 'Currants Roll', 
      price: 3.50, 
      quantity: 0
    },
    { 
      name: 'Jam Tart', 
      price: 7.00, 
      quantity: 0
    },
    { 
      name: 'Chicken Pie', 
      price: 9.00, 
      quantity: 0
    },
    { 
      name: 'Cinnamon Bun', 
      price: 4.50, 
      quantity: 0
    },
    { 
      name: 'Sourdough Loaf', 
      price: 8.00, 
      quantity: 0
    },
    { 
      name: 'Chocolate Croissant', 
      price: 5.00, 
      quantity: 0
    },
    { 
      name: 'Baguette', 
      price: 6.50, 
      quantity: 0
    }
  ];

  get cartItems() {
    return this.bakeryItems.filter(item => item.quantity > 0);
  }

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  async ngOnInit() {

  }

  increaseQuantity(index: number) {
    this.bakeryItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.bakeryItems[index].quantity > 0) {
      this.bakeryItems[index].quantity--;
    }
  }

  normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
  }
}