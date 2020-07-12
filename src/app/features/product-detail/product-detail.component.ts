import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { PRODUCTS } from '../home/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: IProduct[] = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
