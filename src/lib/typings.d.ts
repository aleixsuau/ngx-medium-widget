export interface IMediumWidgetConfig {
  resource?: string;
  postsPerLine?: number;
  limit?: number;
  picture?: 'big' | 'small';
  fields?: 'description' | 'author' | 'claps' | 'publishAt'[];
  ratio?: 'original' | 'landscape' | 'square';
}
