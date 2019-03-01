import { Injectable } from '@angular/core';
import { IMediumWidgetConfig } from '../typings';

@Injectable()
export class MediumWidgetService {

  constructor() { }

  load(
    resource: IMediumWidgetConfig['resource'],
    postsPerLine?: IMediumWidgetConfig['postsPerLine'],
    postsLimit?: IMediumWidgetConfig['limit'],
    pictureSize?: IMediumWidgetConfig['picture'],
    postfields?: IMediumWidgetConfig['fields'],
    postRatio?: IMediumWidgetConfig['ratio'],
  ) {
    if (!resource) {
      return console.error('Medium widget needs a resource (@Input).');
    }

    if (postfields && !Array.isArray(postfields)) {
      return console.error('Medium widget postfields (@Input) has to be an array.');
    }

    if (!window['MediumWidget']) {
      const script = document.createElement('script');
      script.src = 'https://medium-widget.pixelpoint.io/widget.js';
      script.async = true;
      script.addEventListener('load', () => this.init(resource, postsPerLine, postsLimit, pictureSize, postfields));

      document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    } else {
      window['MediumWidget'].unmount();
      this.init(resource, postsPerLine, postsLimit, pictureSize, postfields);
    }
  }

  init(
    resource,
    postsPerLine?,
    postsLimit?,
    pictureSize?,
    postfields?,
    postRatio?,
  ) {
    const params: IMediumWidgetConfig = {
      resource: resource,
      postsPerLine: postsPerLine || 2,
      limit: postsLimit || 100,
      picture: pictureSize || 'big',
      fields: postfields || ['description', 'author', 'claps', 'publishAt'],
      ratio: 'landscape',
    };

    window['MediumWidget'].Init({
      renderTo: '#medium-widget',
      params
    })
  }
}
