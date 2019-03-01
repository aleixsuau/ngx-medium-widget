import { Component, OnChanges, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import { MediumWidgetService } from '../../service/medium-widget.service';
import { IMediumWidgetConfig } from '../../typings';

@Component({
  selector: 'ngx-medium-widget',
  templateUrl: './medium-widget.component.html',
  styleUrls: ['./medium-widget.component.css']
})
export class MediumWidgetComponent implements OnChanges, AfterViewInit {
  @Input()
  resource: IMediumWidgetConfig['resource'];
  @Input()
  postsPerLine: IMediumWidgetConfig['postsPerLine'];
  @Input()
  postsLimit: IMediumWidgetConfig['limit'];
  @Input()
  pictureSize: IMediumWidgetConfig['picture'];
  @Input()
  postfields: IMediumWidgetConfig['fields'];
  @Input()
  postRatio: IMediumWidgetConfig['ratio'];

  constructor(
    private mediumWidgetService: MediumWidgetService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.resource.firstChange) {
      this.mediumWidgetService.load(this.resource, this.postsPerLine, this.postsLimit, this.pictureSize, this.postfields, this.postRatio);
    }
  }

  ngAfterViewInit() {
    this.mediumWidgetService.load(this.resource, this.postsPerLine, this.postsLimit, this.pictureSize, this.postfields, this.postRatio);
  }
}
