import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ NavbarComponent, FooterComponent, ProductItemComponent],
  imports: [ CommonModule, RouterModule ],
  exports: [ RouterModule, NavbarComponent, FooterComponent,
    ProductItemComponent]
})
export class SharedModule { }
