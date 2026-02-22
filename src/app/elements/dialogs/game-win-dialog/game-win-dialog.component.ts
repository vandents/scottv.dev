import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserService } from '@services/browser-service/browser.service';

enum Player {
  x = 1,
  o,
  robot
}

const OUT_TIME = 1000;

/** Dialog displayed when a player wins */
@Component({
  standalone: false,
  selector: 'app-game-win-dialog',
  templateUrl: './game-win-dialog.component.html',
  styleUrls: ['./game-win-dialog.component.scss']
})
export class GameWinDialogComponent implements OnInit {
  public data: any = inject(MAT_DIALOG_DATA);
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
  resting = false;        // Trigger for loser icon post-animation
  restColor = 'rgb(50, 50, 50)';  // Color for loser icon post-animation
  message: string;
  robotMessages = [
    `Praise your robot overlords.`,
    `Silicon > Carbon.`,
    `The Singularity is nigh.`,
    `Rest in peace, human.`,
    `Hasta la vista, baby.`
  ];

  constructor(
    public browser: BrowserService,
    public dialogRef: MatDialogRef<GameWinDialogComponent>,
    private cdr: ChangeDetectorRef
  ) {
    this.winner = this.data.winner;
    this.isRobot = this.data.isRobot;
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
      this.cdr.detectChanges();
    }, 500);

    setTimeout(() => {
      this.animateLoser = true;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.resting = true;
        this.cdr.detectChanges();
      }, OUT_TIME - 10);
    }, 550);

    setTimeout(() => {
      this.animateMessage = true;
      this.cdr.detectChanges();
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
