import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageData = [];

  constructor() {
    this.pageData.push({ name: 'ed', position: 'instructor' });
    this.pageData.push({ name: 'jesse', position: 'instructor' });
    this.pageData.push({ name: 'jay', position: 'TA' });
  }

  ngOnInit() {
  }

}
