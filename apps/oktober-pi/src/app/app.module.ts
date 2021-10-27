import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { RolaColorPipe } from './shared/rola-color.pipe';

@NgModule({
  declarations: [AppComponent, LedComponent, LedListComponent, RolaColorPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
