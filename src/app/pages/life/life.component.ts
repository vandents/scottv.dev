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
      title: `She said yes!`,
      medias: [
        {
          src: '../../../assets/img/engagement-2.jpg',
          alt: 'Maddie and Scott after he proposed'
        },
        {
          src: '../../../assets/img/engagement-1.jpg',
          alt: 'Maddie and Scott after he proposed'
        },
        {
          src: '../../../assets/img/engagement-3.jpg',
          alt: 'Maddie and Scott after he proposed'
        }
      ],
      caption: 'In April 2025 I get to marry my best friend Maddie.'
    },
    {
      title: `West Michigan's Newest Homeowner`,
      medias: [
        {
          src: '../../../assets/img/house-1.jpg',
          alt: 'House under construction'
        },
        {
          src: '../../../assets/img/house-2.jpg',
          alt: 'Scott and his realtor Jake after closing'
        }
      ],
      caption: `Finally moved out of mom's basement.`
    },
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
      caption: `Checked off a huge bucket list item by completing the 2023 GR Marathon in 3 hours 28 minutes (7:58 mile pace).`
    },
    // {
    //   title: `Trying the Trades`,
    //   medias: [
    //     // Barn demo video
    //     {
    //       src: 'https://streamable.com/e/lu95oj?autoplay=1&nocontrols=1',
    //       alt: '',
    //       isVideo: true
    //     },
    //     {
    //       src: '../../../assets/img/trades-1.jpg',
    //       alt: 'Screeting concrete'
    //     },
    //     {
    //       src: '../../../assets/img/trades-2.jpg',
    //       alt: 'Clearing trails with a skid steer'
    //     },
    //     {
    //       src: '../../../assets/img/trades-4.jpg',
    //       alt: 'Installing a cattle waterer'
    //     },
    //     {
    //       src: '../../../assets/img/trades-5.jpg',
    //       alt: 'Midwestern logo'
    //     }
    //   ],
    //   caption: `"You'll have that on them big jobs."`
    // }
  ];

  hobbies: Article[] = [
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
          alt: `Text that says "That's the only photo of me at the gym"`
        }
      ],
      caption: `455lb deadlift and counting!`
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
