import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatSnackBar } from '@angular/material';
import { GameWinDialogComponent } from './game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent } from './choose-competitor-dialog/choose-competitor-dialog.component';
import { stringify } from 'querystring';

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
  isRobot: boolean;

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
    this.openChooseCompetitorDialog();
  }

  isScreenLarge() {
    if (this.screenWidth >= 992) return true;
    return false;
  }

  isScreenBigEnough() {
    if (this.screenWidth > 650) return true;
    return false;
  }

  initBoard() {
    this.xArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.oArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.whosTurn = Math.random() < 0.5;
    this.xWon = false;
    this.oWon = false;
    this.numTurns = 0;
  }

  resetBoard() {
    this.initBoard();
    if (this.isRobot && !this.whosTurn) {
      setTimeout(() => {
        this.robotMove(true);
      }, 1000);
    }
  }

  /** Main game handler */
  squareClicked(row: number, column: number) {
    if (this.whosTurn) {
      if (this.oArray[row][column] == false) {
        this.xArray[row][column] = true;
        this.toggleWhosTurn();
      }
    }
    if (!this.whosTurn && !this.isRobot) {
      if (this.xArray[row][column] == false) {
        this.oArray[row][column] = true;
        this.toggleWhosTurn();
      }
    }

    if (!this.whosTurn && this.isRobot) {
      let timeout = this.getRandomInt(700);
      if (timeout < 150) timeout = 150;

      setTimeout(() => {
        this.robotMove();
        if (this.checkForWinner()) this.openGameWinDialog();
        else if (this.numTurns >= 9) this.openSnackBar(`It's a draw!`, `Reset Board`);
      }, timeout);
    } else {
      if (this.checkForWinner()) this.openGameWinDialog();
      else if (this.numTurns >= 9) this.openSnackBar(`It's a draw!`, `Reset Board`);
    }
  }

  toggleWhosTurn() {
    this.whosTurn = !this.whosTurn;
    this.numTurns++;
  }

  checkForWinner(): boolean {
    // console.log('xArray:');
    // console.log(this.xArray);
    // console.log('oArray:');
    // console.log(this.oArray);
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

  robotMove(isFirstTurn?: boolean) {
    if (isFirstTurn) {
      let i: number;
      let j: number;
      if (Math.random() < 0.5) i = 0;
      else i = 2;
      if (Math.random() < 0.5) j = 0;
      else j = 2;

      this.oArray[i][j] = true;
      this.toggleWhosTurn();
      return;
    }

    if (this.findWin()) {
      this.toggleWhosTurn();
      return;
    }
    if (this.killPotentialWin()) {
      this.toggleWhosTurn();
      return;
    }
    this.randomMove();
    this.toggleWhosTurn();
  }

  randomMove() {
    let moveNotFound = true;
    let row: number;
    let col: number;
    const legalMoves = this.getLegalMoves();

    while (moveNotFound) {
      row = this.getRandomInt(3);
      col = this.getRandomInt(3);
      if (legalMoves[row][col]) {
        this.oArray[row][col] = true;
        moveNotFound = false;
        return;
      }
    }
  }

  /** @returns {boolean} true if executed a winning placement. */
  findWin(): boolean {
    const legalMoves = this.getLegalMoves();
    let tally = 0;

    /* Rows */
    // first row
    for (let i = 0; i < 3; i++) {
      if (this.oArray[0][i]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[0][i] && legalMoves[0][i]) {
          this.oArray[0][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    // second row
    for (let i = 0; i < 3; i++) {
      if (this.oArray[1][i]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[1][i] && legalMoves[1][i]) {
          this.oArray[1][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    // third row
    for (let i = 0; i < 3; i++) {
      if (this.oArray[2][i]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[2][i] && legalMoves[2][i]) {
          this.oArray[2][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    /* Columns */
    // first col
    for (let i = 0; i < 3; i++) {
      if (this.oArray[i][0]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[i][0] && legalMoves[i][0]) {
          this.oArray[i][0] = true;
          return true;
        }
      }
    }
    tally = 0;

    // second col
    for (let i = 0; i < 3; i++) {
      if (this.oArray[i][1]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[i][1] && legalMoves[i][1]) {
          this.oArray[i][1] = true;
          return true;
        }
      }
    }
    tally = 0;

    // third col
    for (let i = 0; i < 3; i++) {
      if (this.oArray[i][2]) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.oArray[i][2] && legalMoves[i][2]) {
          this.oArray[i][2] = true;
          return true;
        }
      }
    }
    tally = 0;

    /* Diagonal */
    // slant left
    for (let i = 0; i < 3; i++) {
      if (this.oArray[i][i]) tally++;
    }
    if (tally >= 2) {
      if (this.oArray[0][0] && this.oArray[1][1] && legalMoves[2][2]) {
        this.oArray[2][2] = true;
        return true;
      }
      if (this.oArray[0][0] && this.oArray[2][2] && legalMoves[1][1]) {
        this.oArray[1][1] = true;
        return true;
      }
      if (this.oArray[1][1] && this.oArray[2][2] && legalMoves[0][0]) {
        this.oArray[0][0] = true;
        return true;
      }
    }
    tally = 0;

    // slant right
    if (this.oArray[0][2]) tally++;
    if (this.oArray[1][1]) tally++;
    if (this.oArray[2][0]) tally++;
    if (tally >= 2) {
      if (this.oArray[0][2] && this.oArray[1][1] && legalMoves[2][0]) this.oArray[2][0] = true;
      else if (this.oArray[0][2] && this.oArray[2][0] && legalMoves[1][1]) this.oArray[1][1] = true;
      else if (this.oArray[1][1] && this.oArray[2][0] && legalMoves[0][2]) this.oArray[0][2] = true;
      return true;
    }

    return false;
  }

  /** @returns {boolean} true if the opponents potential win was killed. */
  killPotentialWin(): boolean {
    const legalMoves = this.getLegalMoves();
    let tally = 0;

    /* Rows */
    // first row
    for (let i = 0; i < 3; i++) {
      if (this.xArray[0][i] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[0][i] && legalMoves[0][i]) {
          this.oArray[0][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    // second row
    for (let i = 0; i < 3; i++) {
      if (this.xArray[1][i] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[1][i] && legalMoves[1][i]) {
          this.oArray[1][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    // third row
    for (let i = 0; i < 3; i++) {
      if (this.xArray[2][i] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[2][i] && legalMoves[2][i]) {
          this.oArray[2][i] = true;
          return true;
        }
      }
    }
    tally = 0;

    /* Columns */
    // first col
    for (let i = 0; i < 3; i++) {
      if (this.xArray[i][0] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[i][0] && legalMoves[i][0]) {
          this.oArray[i][0] = true;
          return true;
        }
      }
    }
    tally = 0;

    // second col
    for (let i = 0; i < 3; i++) {
      if (this.xArray[i][1] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[i][1] && legalMoves[i][1]) {
          this.oArray[i][1] = true;
          return true;
        }
      }
    }
    tally = 0;

    // third col
    for (let i = 0; i < 3; i++) {
      if (this.xArray[i][2] === true) tally++;
    }
    if (tally >= 2) {
      for (let i = 0; i < 3; i++) {
        if (!this.xArray[i][2] && legalMoves[i][2]) {
          this.oArray[i][2] = true;
          return true;
        }
      }
    }
    tally = 0;

    /* Diagonal */
    // slant left
    for (let i = 0; i < 3; i++) {
      if (this.xArray[i][i]) tally++;
    }
    if (tally >= 2) {
      if (this.xArray[0][0] && this.xArray[1][1] && legalMoves[2][2]) {
        this.oArray[2][2] = true;
        return true;
      }
      if (this.xArray[0][0] && this.xArray[2][2] && legalMoves[1][1]) {
        this.oArray[1][1] = true;
        return true;
      }
      if (this.xArray[1][1] && this.xArray[2][2] && legalMoves[0][0]) {
        this.oArray[0][0] = true;
        return true;
      }
    }
    tally = 0;

    // slant right
    if (this.xArray[0][2]) tally++;
    if (this.xArray[1][1]) tally++;
    if (this.xArray[2][0]) tally++;
    if (tally >= 2) {
      if (this.xArray[0][2] && this.xArray[1][1] && legalMoves[2][0]) {
        this.oArray[2][0] = true;
        return true;
      }
      else if (this.xArray[0][2] && this.xArray[2][0] && legalMoves[1][1]) {
        this.oArray[1][1] = true;
        return true;
      }
      else if (this.xArray[1][1] && this.xArray[2][0] && legalMoves[0][2]) {
        this.oArray[0][2] = true;
        return true;
      }
    }

    return false;
  }

  getLegalMoves() {
    const legalMoves = [[true, true, true], [true, true, true], [true, true, true]];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.xArray[i][j] || this.oArray[i][j]) legalMoves[i][j] = false;
      }
    }
    // console.log('legalMoves:');
    // console.log(legalMoves);
    return legalMoves;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  isClickEnabled(): boolean {
    if (!this.whosTurn && this.isRobot) return false;
    return true;
  }

  openGameWinDialog() {
    let winner: string;
    if (this.xWon) winner = 'Player X';
    else if (this.oWon && this.isRobot) winner = 'Mr. Roboto';
    else winner = 'Player O';

    const dialogRef = this.dialog.open(
      GameWinDialogComponent, {
        width: '500px', height: '400px',
        data: {
          winner: winner
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.resetBoard();
    });
  }

  openChooseCompetitorDialog() {
    const dialogRef = this.dialog.open(
      ChooseCompetitorDialogComponent, {
        width: '500px', height: '350px',
        data: { }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.isRobot = result;
      if (this.isRobot && !this.whosTurn) this.robotMove(true);
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
