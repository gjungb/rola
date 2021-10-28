import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'rola-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css'],
  providers: [LedService],
})
export class LedListComponent implements OnInit, OnDestroy {
  leds?: Leds;

  tick?: number;

  tick$?: Observable<number>;

  private sub?: Subscription;

  private destroy$ = new Subject();

  constructor(private readonly service: LedService) {}

  handleLedAction(index: number): void {
    console.log(index);
  }

  ngOnInit(): void {
    this.tick$ = timer(2000, 5000).pipe(
      tap((value) => console.log(value))
      // takeUntil(this.destroy$)
    );
    // .subscribe({
    //   next: (value) => (this.tick = value),
    // });

    this.service
      .readLeds()
      .pipe(tap((res) => console.log(res)))
      .subscribe((res) => {
        this.leds = res;
      });

    console.log(this.leds);
  }

  ngOnDestroy(): void {
    this.destroy$.next();

    this.sub?.unsubscribe();
  }
}
