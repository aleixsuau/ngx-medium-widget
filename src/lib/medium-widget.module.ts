import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumWidgetComponent } from './component/medium-widget/medium-widget.component';
import { MediumWidgetService } from './service/medium-widget.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MediumWidgetComponent],
  providers: [MediumWidgetService],
  exports: [MediumWidgetComponent],
})
export class MediumWidgetModule { }