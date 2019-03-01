# NGX-MEDIUM-WIDGET
Show your Medium posts (or others) right in your Angular app.

This is just an Angular wrapper component around https://medium-widget.pixelpoint.io



## API REFERENCE for ngx-medium-widget:

1 - Import the module:

  ```
  import { MediumWidgetModule } from 'ngx-medium-widget';
  ```

2 - Add it to the module where you want to use it:

  ```
  @NgModule({
    declarations: [...],
    imports: [ MediumWidgetModule],
  })
  export class sampleModule { }
  ```

You can check a working example here: https://stackblitz.com/edit/ngx-medium-posts-widget



## COMPONENT: MediumWidgetComponent

```
<ngx-medium-widget resource="https://medium.com/@aleixsuau"
                   postsLimit="10"
                   postsPerLine="3"
                   pictureSize="small"
                   [postfields]="['description', 'author', 'claps']"
                   postRatio="square">
</ngx-medium-widget>
```

@Input()
**resource**: string;
- Url of the posts resource (ie: https://medium.com/@aleixsuau)

@Input()
**postsLimit**?: number;
- Number of total posts to show
- Defaults to 100

@Input()
**postsPerLine**?: number;
- Number of posts to show per line
- Defaults to 2

@Input()
**pictureSize**?: 'big' | 'small';
- Size of the post's picture
- Defaults to 'big'

@Input()
**postfields**?: 'description' | 'author' | 'claps' | 'publishAt'[];
- Array of post's fields to show.
- Defaults to ['description', 'author', 'claps', 'publishAt']

@Input()
**postRatio**?: 'original' | 'landscape' | 'square';
- Post ratio.
- Defaults to 'landscape'

