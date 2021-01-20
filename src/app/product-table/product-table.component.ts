import { Component, OnInit } from '@angular/core';
import { SpawnOptionsWithStdioTuple } from 'child_process';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products : any;
  checkValid : any;

  constructor(private productService : ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.list;
    this.checkValid = this.productService.checkValid;
    this.products.forEach(element => {
      element.expirationCode = this.checkValid(element.expirationDate);
      
    });
  }


}
