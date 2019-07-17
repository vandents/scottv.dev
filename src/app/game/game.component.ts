import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatSnackBar } from '@angular/material';
import { GameWinDialogComponent } from './game-win-dialog/game-win-dialog.component';

/** A little something I hacked together. */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  xArray: boolean[][];
  oArray: boolean[][];
  /** True -> x's turn, false -> o's turn */
  whosTurn: boolean;
  /** Once numTurns hits 9 and there's not a winner we know it's a draw. */
  numTurns: number;
  xWon: boolean;
  oWon: boolean;
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private title: Title
  ) {
    this.title.setTitle('Scott VandenToorn - Game');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.screenWidth = window.innerWidth;
    this.initBoard();
  }

  initBoard() {
    this.xArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.oArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.whosTurn = true;
    this.xWon = false;
    this.oWon = false;
    this.numTurns = 0;
  }

  isScreenLarge() {
    if (this.screenWidth >= 992) return true;
    return false;
  }

  isScreenBigEnough() {
    if (this.screenWidth > 650) return true;
    return false;
  }

  /** Main game handler */
  squareClicked(row: number, column: number) {
    if (this.whosTurn) {
      if (this.oArray[row][column] === false) {
        this.xArray[row][column] = true;
        this.toggleWhosTurn();
      }
    }
    if (!this.whosTurn) {
      if (this.xArray[row][column] === false) {
        this.oArray[row][column] = true;
        this.toggleWhosTurn();
      }
    }

    if (this.checkForWinner()) this.openGameWinDialog();
    else if (this.numTurns >= 9) this.openSnackBar(`It's a draw!`, `Reset Board`);
  }

  toggleWhosTurn() {
    this.whosTurn = !this.whosTurn;
    this.numTurns++;
  }

  checkForWinner(): boolean {
    if (this.xArray[0][0] && this.xArray[0][1] && this.xArray[0][2]) { this.xWon = true; return true; }
    if (this.xArray[1][0] && this.xArray[1][1] && this.xArray[1][2]) { this.xWon = true; return true; }
    if (this.xArray[2][0] && this.xArray[2][1] && this.xArray[2][2]) { this.xWon = true; return true; }
    if (this.xArray[0][0] && this.xArray[1][0] && this.xArray[2][0]) { this.xWon = true; return true; }
    if (this.xArray[0][1] && this.xArray[1][1] && this.xArray[2][1]) { this.xWon = true; return true; }
    if (this.xArray[0][2] && this.xArray[1][2] && this.xArray[2][2]) { this.xWon = true; return true; }
    if (this.xArray[0][0] && this.xArray[1][1] && this.xArray[2][2]) { this.xWon = true; return true; }
    if (this.xArray[0][2] && this.xArray[1][1] && this.xArray[2][0]) { this.xWon = true; return true; }

    if (this.oArray[0][0] && this.oArray[0][1] && this.oArray[0][2]) { this.oWon = true; return true; }
    if (this.oArray[1][0] && this.oArray[1][1] && this.oArray[1][2]) { this.oWon = true; return true; }
    if (this.oArray[2][0] && this.oArray[2][1] && this.oArray[2][2]) { this.oWon = true; return true; }
    if (this.oArray[0][0] && this.oArray[1][0] && this.oArray[2][0]) { this.oWon = true; return true; }
    if (this.oArray[0][1] && this.oArray[1][1] && this.oArray[2][1]) { this.oWon = true; return true; }
    if (this.oArray[0][2] && this.oArray[1][2] && this.oArray[2][2]) { this.oWon = true; return true; }
    if (this.oArray[0][0] && this.oArray[1][1] && this.oArray[2][2]) { this.oWon = true; return true; }
    if (this.oArray[0][2] && this.oArray[1][1] && this.oArray[2][0]) { this.oWon = true; return true; }

    return false;
  }

  openGameWinDialog() {
    const dialogRef = this.dialog.open(
      GameWinDialogComponent, {
        width: '500px', height: '400px',
        data: {
          winner: this.xWon ? 'X' : 'O'
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.initBoard();
    });
  }

  openSnackBar(message: string, action = 'Dismiss') {
    const snackBarRef = this.snackBar.open(message, action, {
    });

    snackBarRef.onAction().subscribe(() => {
      this.initBoard();
    });
  }

}
