import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {

  }

  viewDetail(product: IProduct){
    this.router.navigate(['detalle']);
  }

}
