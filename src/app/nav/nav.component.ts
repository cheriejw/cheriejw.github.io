import { Component, OnInit, HostListener } from '@angular/core';
import { Config } from '../shared/config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  PORTFOLIO_NAME: string;
  COMPONENT_HEIGHT: string;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // When you scroll past the home component...
    if (number > Config.homeComponentHeight - Config.navComponentHeight) {
      document.getElementById('nav_component').classList.add('past-home-component');
      document.getElementById('nav_component').classList.remove('over-home-component');
    } else {
      document.getElementById('nav_component').classList.add('over-home-component');
      document.getElementById('nav_component').classList.remove('past-home-component');
    }
  }

  constructor() {
    this.PORTFOLIO_NAME = Config.portfolioName;
    this.COMPONENT_HEIGHT = Config.navComponentHeight + 'px';
  }

  ngOnInit() {}

}
