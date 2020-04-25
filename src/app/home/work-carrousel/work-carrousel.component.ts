import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'omt-work-carrousel',
  templateUrl: './work-carrousel.component.html',
  styleUrls: ['./work-carrousel.component.scss'],
})
export class WorkCarrouselComponent implements OnInit {
  isMobile = false;

  constructor(layout: BreakpointObserver) {
    layout
      .observe([Breakpoints.Handset])
      .subscribe((x) => (this.isMobile = x.matches));
  }

  ngOnInit(): void {}
}
