import { Component, Input } from '@angular/core';
import { ThemeService } from '@app/services/theme-service/theme.service';

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

  constructor(public themeService: ThemeService) {

  }

}
