import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloDirective } from './hello.directive';
import { HelloComponent } from './hello/hello.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HelloDirective, HelloComponent],
  exports: [HelloDirective, HelloComponent],
})
export class LedModule {}
