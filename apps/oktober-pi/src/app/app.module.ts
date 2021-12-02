import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ColorFormComponent } from './color-form/color-form.component';
import { ControlsComponent } from './controls/controls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { LedListComponent } from './led-list/led-list.component';
import { LedComponent } from './led/led.component';
import { RolaColorPipe } from './shared/rola-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    RolaColorPipe,
    ControlsComponent,
    ColorFormComponent,
    DashboardComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
