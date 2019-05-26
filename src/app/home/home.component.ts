import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, NgZone, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'omt-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks = [
    { path: '#about', label: 'About me' },
    { path: '#work', label: 'Work' }
  ];

  selectedTab = '';

  constructor(scroll: ScrollDispatcher, private zone: NgZone) {
    scroll.scrolled(50).pipe(
      filter((x): x is CdkScrollable => !!x && x instanceof CdkScrollable)
    ).subscribe(this.updateSelectedTab.bind(this));
  }

  updateSelectedTab(ev: CdkScrollable) {
    const current = this.navLinks.map(x => document.querySelector(x.path))
      .filter((x): x is HTMLElement => x != null)
      .find(wrk => {
        const b = wrk.getBoundingClientRect();
        if (b instanceof DOMRect) {
          return (
            b.y > 0 &&
            b.x > 0 &&
            b.x < window.innerWidth &&
            b.y < window.innerHeight
          );
        }
        return (
          (b.top >= 0 || b.top + b.height >= 0) &&
          b.left >= 0 &&
          b.right <= window.innerWidth &&
          b.bottom - b.height <= window.innerHeight
        );
      });
    this.zone.run(() => {
      if (current != null) {
        this.selectedTab = `#${current.id}`;
      } else {
        this.selectedTab = '';
      }
    });
  }

  ngOnInit() { }
}
