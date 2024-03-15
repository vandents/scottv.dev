import { Component, Input } from '@angular/core';

export interface Slide {
  src: string;
  alt: string;
  isVideo?: boolean;
}

export interface Article {
  title: string;
  medias: Array<Slide>;
  caption: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article: Article;
}
