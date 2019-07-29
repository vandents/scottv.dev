import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserService } from 'src/app/services/browser-service/browser.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

enum Player {
  x = 1,
  o,
  robot
}

const IN_TIME = 1300;
const OUT_TIME = 1000;

/** Dialog displayed when a player wins */
@Component({
  selector: 'app-game-win-dialog',
  templateUrl: './game-win-dialog.component.html',
  styleUrls: ['./game-win-dialog.component.css'],
  animations: [
    trigger('fade', [
      // the "in" style determines the "resting" state of the element when it is visible.
      // the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      // the styles start from this point when the element appears and animate toward the "in" state above
      transition(':enter', [style({ opacity: 0 }), animate(IN_TIME)]),
      // fade out when destroyed. this could also be written as transition('void => *')
      // fading out uses a different syntax, with the "style" being passed into animate()
      transition(':leave', animate(OUT_TIME, style({ opacity: 0.465, color: 'rgb(36, 36, 36)' })))
    ])
  ]
})
export class GameWinDialogComponent implements OnInit {
  playerName: string;
  winner: Player;
  isRobot = false;
  robotWin = false;       // Win screen for Mr. Roboto beating X
  robotLose = false;      // Win screen for X beating Mr. Roboto
  xWin = false;           // Win screen for X beating O
  oWin = false;           // Win screen for O beating X
  animateWinner = false;  // Triggers for winner animations
  animateLoser = false;   // Triggers for loser animations
  animateMessage = false; // Triggers for robot message animations
  resting: boolean;       // Trigger for loser icon post-animation
  restColor = 'rgb(50, 50, 50)';  // Color for loser icon post-animation
  message: string;
  robotMessages = [
    `Praise your robot overlords`,
    `Silicon > Carbon`,
    `The Singularity is nigh`,
    `Rest in peace, human`,
    `Hasta la vista, baby`
  ];

  constructor(
    public browser: BrowserService,
    public dialogRef: MatDialogRef<GameWinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.winner = data.winner;
    this.isRobot = data.isRobot;
  }

  ngOnInit() {
    // this.tests();
    this.animations();
    switch (this.winner) {
      case Player.x: {
        this.playerName = 'Player X';
        this.isRobot ? this.robotLose = true : this.xWin = true;
        break;
      }
      case Player.o: {
        this.playerName = 'Player O';
        this.oWin = true;
        break;
      }
      case Player.robot: {
        this.playerName = 'Mr. Roboto';
        this.robotWin = true;
        break;
      }
    }
  }

  /** Manages icon/message animations */
  animations() {
    const randNum = this.getRandomInt(this.robotMessages.length);
    this.message = this.robotMessages[randNum];

    setTimeout(() => {
      this.animateWinner = true;
    }, 500);

    setTimeout(() => {
      this.animateLoser = true;

      setTimeout(() => {
        this.resting = true;
      }, OUT_TIME - 10);
    }, 550);

    setTimeout(() => {
      this.animateMessage = true;
    }, 550);
  }

  /**
   * @param max The max value of the random integer (non-inclusive)
   * @returns {number} a random number between 0 and max
   */
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /** Method for testing different win conditions */
  tests() {
    /* X win test */
    // this.playerName = 'Player X';
    // this.xWin = true;
    // this.isRobot = false;

    /* O win test */
    // this.playerName = 'Player O';
    // this.oWin = true;
    // this.isRobot = false;

    /* Robot win test */
    // this.playerName = 'Mr. Roboto';
    // this.robotWin = true;
    // this.isRobot = true;

    /* Robot lose test */
    // this.playerName = 'Player X';
    // this.robotLose = true;
    // this.isRobot = true;
  }

}
