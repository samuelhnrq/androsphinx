import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'omt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibleToolbar = false;

  constructor(rota: Router) {
    rota.events.pipe(
      filter((x): x is ActivationEnd => x instanceof ActivationEnd)
    ).subscribe(x => this.visibleToolbar = !x.snapshot.data.hideToolbar);
  }
}
