import { Component, Input, OnInit } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'rola-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent implements OnInit {

  @Input('rolaLed')
  led: Led = {
    index: 0,
    color: 'goldenrod',
  };

  @Input('rolaFoo')
  set foo(value: string) {
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {

  }
}
