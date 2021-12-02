import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'rola-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css'],
})
export class LedListComponent implements OnInit, OnDestroy {
  leds?: Leds;

  tick?: number;

  tick$?: Observable<number>;

  private sub?: Subscription;

  private destroy$ = new Subject<void>();

  constructor(private readonly service: LedService) {}

  handleLedAction(index: number): void {
    this.service
      .updateLed(index)
      .pipe(tap((led) => console.log(led)))
      .subscribe((led) => {
        this.leds && (this.leds[index] = led);
      });
  }

  /**
   * TODO docs
   */
  loadLeds(): void {
    this.service
      .readLeds()
      .pipe(tap((res) => console.log(res)))
      .subscribe((res) => {
        this.leds = res;
      });
  }

  ngOnInit(): void {
    this.tick$ = timer(2000, 5000).pipe(
      tap((value) => console.log(value))
      // takeUntil(this.destroy$)
    );
    // .subscribe({
    //   next: (value) => (this.tick = value),
    // });

    this.loadLeds();
  }

  ngOnDestroy(): void {
    this.destroy$.next();

    this.sub?.unsubscribe();
  }
}
