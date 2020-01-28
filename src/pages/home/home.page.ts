import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerButtons() {
    console.log("headerButtons");
    return "";
  }

  itemButtons() {
    console.log("itemButtons");
    return '<button type="button" class="btn btn-outline-primary" (click)="showButtonClick()">SHOW</button>';
  }

  showButtonClick() {
    console.log("show home");
  }

}