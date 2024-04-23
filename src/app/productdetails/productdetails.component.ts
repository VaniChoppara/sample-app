import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductcountComponent } from '../productcount/productcount.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, ProductcountComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  products: any[] = [];
  radioButtonValue: String = 'All';

  constructor() {
    this.products = [
      {
        productId: 101,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 102,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 103,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Lenovo',
      },
      {
        productId: 104,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Sony',
      },
      {
        productId: 105,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 106,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 107,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 108,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 109,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'DELL',
      },
      {
        productId: 110,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'HP',
      },
      {
        productId: 111,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
    ];
  }

  refreshProducts() {
    this.products = [
      {
        productId: 101,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 102,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 103,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Lenovo',
      },
      {
        productId: 104,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Sony',
      },
      {
        productId: 105,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 106,
        productName: 'TV',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 107,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 108,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Samsung',
      },
      {
        productId: 109,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'DELL',
      },
      {
        productId: 110,
        productName: 'Laptop',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'HP',
      },
      {
        productId: 111,
        productName: 'Mobile',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
      {
        productId: 112,
        productName: 'AC',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'TATA',
      },
      {
        productId: 113,
        productName: 'AC',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'LG',
      },
      {
        productId: 114,
        productName: 'AC',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Sony',
      },
      {
        productId: 115,
        productName: 'AC',
        price: 10000,
        category: 'Electronics',
        expDate: '22/11/2026',
        manufacturer: 'Apple',
      },
    ];
  }

  trackByProductIndex(index: number, product: any) {
    return product.code;
  }

  getAllProductsCount(): number {
    return this.products.length;
  }

  getMobileCount(): number {
    return this.products.filter((p) => p.productName == 'Mobile').length;
  }

  getLaptopCount(): number {
    return this.products.filter((p) => p.productName == 'Laptop').length;
  }

  getTvCount(): number {
    return this.products.filter((p) => p.productName == 'TV').length;
  }

  getAcCount(): number {
    return this.products.filter((p) => p.productName == 'AC').length;
  }
  onRadioChange(selectedRadioButtonValue: string) {
    console.log(
      'Count Component Emitted the value ' + selectedRadioButtonValue
    );
    this.radioButtonValue = selectedRadioButtonValue;
  }
}
