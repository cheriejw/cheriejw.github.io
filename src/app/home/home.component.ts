import { Component, OnInit } from '@angular/core';
import { Config } from '../shared/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  COMPONENT_HEIGHT: string;

  constructor() {
    this.COMPONENT_HEIGHT = Config.homeComponentHeight + 'px';
  }

  ngOnInit() { }

}
