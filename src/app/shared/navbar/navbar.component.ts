import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navButtonOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  change(){
    this.navButtonOpen = !this.navButtonOpen;
  }

}
