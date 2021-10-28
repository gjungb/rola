import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output('rolaLedAction')
  action$ = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(ev: MouseEvent): void {
    console.log('clicked', ev.ctrlKey);
    if (ev.ctrlKey) {
      this.action$.emit(this.led.index);
    }
  }
}
