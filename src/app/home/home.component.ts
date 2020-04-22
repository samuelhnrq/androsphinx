import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter } from 'rxjs/operators';

interface ILink {
  path: string;
  label: string;
  ref: ElementRef<any>;
}

@Component({
  selector: 'omt-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedTab = '';
  @ViewChild('work', { static: true })
  work: ElementRef;
  @ViewChild('about', { static: true })
  about: ElementRef;

  navLinks: ILink[] = [];

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
        return (
          b.y > 0 &&
          b.x > 0 &&
          b.x < window.innerWidth &&
          b.y < window.innerHeight
        );
      });
    this.zone.run(() => {
      if (current != null && ev.measureScrollOffset('top') > 10) {
        this.selectedTab = `#${current.id}`;
      } else {
        this.selectedTab = '';
      }
    });
  }

  jumpTo(link: ILink) {
    this.selectedTab = link.path;
    const ref: HTMLElement = link.ref.nativeElement;
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.navLinks.push(
      { path: '#about', label: 'About me', ref: this.about },
      { path: '#work', label: 'Work', ref: this.work });
  }
}
