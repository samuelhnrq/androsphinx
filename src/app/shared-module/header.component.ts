import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'omt-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  openMenu: EventEmitter<never> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
