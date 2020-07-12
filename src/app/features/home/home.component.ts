import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { PRODUCTS } from './products.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
