import { Component, OnInit } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
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

  constructor(private scroll: ScrollDispatcher) {
    scroll.scrolled(500).pipe(
      filter((x): x is CdkScrollable => !!x && x instanceof CdkScrollable)
    ).subscribe(this.updateSelectedTab.bind(this));
  }

  updateSelectedTab(ev: CdkScrollable) {
    const current = this.navLinks.map(x => document.getElementById(x.path))
      .filter((x): x is HTMLElement => x != null)
      .find(wrk => {
        const bounding = wrk.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <= (window.innerWidth) &&
          bounding.bottom <= (window.innerHeight)
        );
      });
      if (current != null) {
        this.selectedTab = `#${current.id}`;
      } else {
        this.selectedTab = '';
      }
  }

  ngOnInit() { }
}
