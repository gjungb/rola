/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @angular-eslint/no-input-rename */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'rola-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // @link {https://angular.io/guide/view-encapsulation}
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LedComponent {
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

  handleClick(ev: MouseEvent): void {
    console.log('clicked', ev.ctrlKey);
    if (ev.ctrlKey) {
      this.action$.emit(this.led.index);
    }
  }
}
