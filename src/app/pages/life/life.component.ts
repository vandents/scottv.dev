import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '@elements/article/article.component';
import { BrowserService } from '@services/browser-service/browser.service';


@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrl: './life.component.scss'
})
export class LifeComponent {
  lifeEvents: Article[] = [
    {
      title: `Dad Mode`,
      medias: [
        {
          src: '../../../assets/img/dad-mode-3.jpg',
          alt: 'Family at the zoo'
        },
        {
          src: '../../../assets/img/dad-mode-1.jpg',
          alt: 'Family riding bikes'
        },
        {
          src: '../../../assets/img/dad-mode-2.jpg',
          alt: 'Messy baby'
        },
        {
          src: '../../../assets/img/dad-mode-4.jpg',
          alt: 'Baby in wagon'
        }
      ],
      caption: 'Building a legion of children.'
    },
    {
      title: `Michigan -> Florida`,
      medias: [
        {
          src: '../../../assets/img/florida-1.jpg',
          alt: 'UHaul truck'
        },
        {
          src: '../../../assets/img/florida-2.jpg',
          alt: 'Baby on the beach'
        }
      ],
      caption: 'Goodbye, snow.'
    },
    {
      title: `Hitched!`,
      medias: [
        {
          src: '../../../assets/img/wedding-1.jpg',
          alt: 'Reading vows'
        },
        {
          src: '../../../assets/img/wedding-2.jpg',
          alt: 'Couple walking'
        },
        {
          src: '../../../assets/img/wedding-3.jpg',
          alt: 'Proposal'
        }
      ],
      caption: 'In 2024 I married my best friend.'
    }
  ];

  hobbies: Article[] = [
    {
      title: `Grand Rapids Marathon`,
      medias: [
        {
          src: '../../../assets/img/marathon-1.jpg',
          alt: 'Kids handing out food during marathon'
        },
        {
          src: '../../../assets/img/marathon-2.jpg',
          alt: 'Family picture at marathon'
        },
        {
          src: '../../../assets/img/marathon-3.jpg',
          alt: 'Marathon bib'
        }
      ],
      caption: `Completed the 2023 GR Marathon in 3 hours 28 minutes (7:58 mile pace).`
    },
    {
      title: `Motocross`,
      medias: [
        {
          src: '../../../assets/img/moto-4.jpg',
          alt: 'The boys in Florida'
        },
        {
          src: '../../../assets/img/moto-2.jpg',
          alt: `Loretta Lynn's gate drop`
        },
        {
          src: '../../../assets/img/moto-1.jpg',
          alt: 'Mud race in Pennsylvania'
        },
        {
          src: '../../../assets/img/moto-3.jpg',
          alt: 'Hitting a jump at Martin MX'
        }
      ],
      caption: `Avid motocross enthusiast, qualifying for the Loretta Lynn's Ameatuer National Championship.`
    },
    {
      title: `Weight Lifting`,
      medias: [
        {
          src: '../../../assets/img/workout-1.jpg',
          alt: 'Deadlifting 425 pounds'
        },
        {
          src: '../../../assets/img/workout-2.jpg',
          alt: `Scott deadlifting`
        }
      ],
      caption: `500lb deadlift and counting!`
    }
  ];


  constructor(
    private title: Title,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Portfolio');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  getTooltip(): string {
    return this.browser.isScreen650() ? 'Click to enlarge' : '';
  }

}
