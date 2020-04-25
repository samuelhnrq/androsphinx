import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Empresa {
  name: string;
  logoUrl: string;
  homePage: string;
}

interface Consultoria extends Empresa {
  periodo: string;
}

interface Cliente extends Empresa {
  inNameOf: Consultoria;
}

const IBM: Consultoria = {
  name: 'IBM',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  homePage: 'https://www.ibm.com/br-pt?',
  periodo: 'Março 2018 - Agosto de 2019',
};
const CERTSYS: Consultoria = {
  name: 'Certsys',
  logoUrl:
    'https://www.certsys.com.br/v10/wp-content/uploads/thegem-logos/logo_9c02b3371575c6970cf35ef1e5ff9271_1x.png',
  homePage: 'https://www.certsys.com.br/',
  periodo: 'Agosto de 2019 - Presente',
};

@Component({
  selector: 'omt-work-carrousel',
  templateUrl: './work-carrousel.component.html',
  styleUrls: ['./work-carrousel.component.scss'],
})
export class WorkCarrouselComponent implements OnInit {
  isMobile = false;
  rxIsMobile: Observable<number> = EMPTY;

  companies: Cliente[] = [
    {
      name: 'SulAmérica',
      logoUrl: '../../../assets/sulamerica.png',
      homePage: 'http://portal.sulamericaseguros.com.br/',
      inNameOf: IBM,
    },
    {
      name: 'Banco Votorantim',
      logoUrl: '../../../assets/logo-banco-bv.svg',
      homePage: 'https://www.bancobv.com.br/',
      inNameOf: CERTSYS,
    },
  ];

  constructor(layout: BreakpointObserver) {
    const breaks = layout.observe([Breakpoints.Handset]);
    breaks.subscribe((x) => (this.isMobile = x.matches));
    this.rxIsMobile = breaks.pipe(map((x) => (x.matches ? 1 : 2)));
  }

  ngOnInit(): void {}
}
