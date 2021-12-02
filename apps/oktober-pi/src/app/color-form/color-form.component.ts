import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'rola-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
})
export class ColorFormComponent implements OnInit {
  color = 'blue';

  form: FormGroup = new FormGroup({});

  colorInput!: FormControl;

  leds$?: Observable<Leds>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: LedService
  ) {}

  bigColor(value: string): void {
    this.color = value.toUpperCase();
  }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   color: this.fb.control(null),
    // });

    this.leds$ = this.service.leds$;

    this.colorInput = this.fb.control('red', {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(3)],
    });

    this.form.addControl('color', this.colorInput);

    this.form.statusChanges.pipe(tap((val) => console.log(val))).subscribe();

    this.colorInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((val) => console.log(val))
      )
      .subscribe();
  }

  submitForm(): void {
    console.log('submit');
  }
}
