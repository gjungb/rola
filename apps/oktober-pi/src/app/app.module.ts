import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LedListComponent } from './led-list/led-list.component';
import { LedComponent } from './led/led.component';
import { RolaColorPipe } from './shared/rola-color.pipe';

@NgModule({
  declarations: [AppComponent, LedComponent, LedListComponent, RolaColorPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
