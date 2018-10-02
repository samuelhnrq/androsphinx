import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omt-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks = [
    { path: '/home#about', label: 'About me' },
    { path: '/home#work', label: 'Work' }
  ];

  selectedTab = '';

  constructor() { }

  ngOnInit() { }
}
