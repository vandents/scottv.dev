import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatSnackBar } from '@angular/material';
import { GameWinDialogComponent } from './game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent } from './choose-competitor-dialog/choose-competitor-dialog.component';
import { BrowserService } from '../services/browser-service/browser.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

enum Player {
  x = 1,
  o,
  robot
}

/**
 * Left slants this way: \
 * Right slants this way: /
 */
enum WinPos {
  row1 = 1,
  row2,
  row3,
  col1,
  col2,
  col3,
  left,
  right
}

/**
 * A little something I hacked together.
 * One thing to note is that the Mr. Roboto hijacks Player O's board array
 * when the user selects to play against him. Just a little heads up for anyone
 * trying to follow the code.
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('fastFade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0.5 }), animate(300)])
    ]),
    trigger('mediumFade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0.2 }), animate(450)])
    ]),
    trigger('blue', [
      state('in', style({ color: '#007bff' })),
      transition(':enter', [style({ opacity: 0.5 }), animate(400)]),
      transition(':leave', animate(350, style({ opacity: 0.3 })))
    ]),
    trigger('grey', [
      state('in', style({ color: 'rgb(66, 66, 66' })),
      transition(':enter', [style({ opacity: 0.5 }), animate(400)]),
      transition(':leave', animate(350, style({ opacity: 0.3 })))
    ])
  ]
})
export class GameComponent implements OnInit {
  xArray: boolean[][];
  oArray: boolean[][];
  /** True -> x's turn, false -> o/robot's turn */
  whosTurn: boolean;
  /** Once numTurns hits 9 and there's not a winner we know it's a draw */
  numTurns: number;
  winner: Player;
  /** True if user is playing against Mr. Roboto */
  isRobot: boolean;
  /** Positions of icons that should turn grey on win condition */
  greyArray: boolean[];
  gameOver: boolean;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private title: Title,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Game');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initBoard();
    this.openChooseCompetitorDialog();
  }

  /** Sets game values to an initial state */
  initBoard() {
    this.xArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.oArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.whosTurn = Math.random() < 0.5;
    this.numTurns = 0;
    this.greyArray = [false, false, false, false, false, false, false, false, false];
    this.gameOver = false;
  }

  /** Initializes board. If it's Mr. Robot's turn after init robotMove() is called */
  resetBoard() {
    this.initBoard();
    if (this.isRobot && !this.whosTurn) {
      setTimeout(() => {
        this.robotMove(true);
      }, 1250);
    }
  }

  /** Initializes board, then opens choose competitor dialog */
  changeOpponent() {
    this.initBoard();
    this.openChooseCompetitorDialog();
  }

  /** Main game handler */
  squareClicked(row: number, column: number) {
    if (this.isRobotTurn() || this.gameOver) return;
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

    if (this.isRobotTurn()) {
      const turnTimeout = 600;

      setTimeout(() => {
        this.robotMove();
        if (this.checkForWinner()) this.openGameWinDialog();
        else if (this.numTurns >= 9) this.openDrawSnackBar();
      }, turnTimeout);
    } else {
      if (this.checkForWinner()) this.openGameWinDialog();
      else if (this.numTurns >= 9) this.openDrawSnackBar();
    }
  }

  /** Toggles whosTurn and increments numTurns */
  toggleWhosTurn() {
    this.whosTurn = !this.whosTurn;
    this.numTurns++;
  }

  /**
   * Sets xWon or oWon to true if win condition is found
   * @returns true if win condition is found
   */
  checkForWinner(): boolean {
    if (this.numTurns < 5) return false;  // Can't have win condition if less than 5 turns have been played

    /**** Check X array ****/
    // Check rows
    for (let i = 0; i <= 2; i++) {
      if (this.xArray[i][0] && this.xArray[i][1] && this.xArray[i][2]) {
        this.winner = Player.x;
        if (i === 0) this.setWinAnimationArray(WinPos.row1);        // First row
        else if (i === 1) this.setWinAnimationArray(WinPos.row2);   // Second row
        else if (i === 2) this.setWinAnimationArray(WinPos.row3);   // Third row
        return true;
      }
    }
    // Check columns
    for (let i = 0; i <= 2; i++) {
      if (this.xArray[0][i] && this.xArray[1][i] && this.xArray[2][i]) {
        this.winner = Player.x;
        if (i === 0) this.setWinAnimationArray(WinPos.col1);        // First column
        else if (i === 1) this.setWinAnimationArray(WinPos.col2);   // Second column
        else if (i === 2) this.setWinAnimationArray(WinPos.col3);   // Third column
        return true;
      }
    }
    // Check diagonal left
    if (this.xArray[0][0] && this.xArray[1][1] && this.xArray[2][2]) {
      this.winner = Player.x;
      this.setWinAnimationArray(WinPos.left);
      return true;
    }
    // Check diagonal right
    if (this.xArray[0][2] && this.xArray[1][1] && this.xArray[2][0]) {
      this.winner = Player.x;
      this.setWinAnimationArray(WinPos.right);
      return true;
    }

    /**** Check O array ****/
    // Check rows
    for (let i = 0; i <= 2; i++) {
      if (this.oArray[i][0] && this.oArray[i][1] && this.oArray[i][2]) {
        this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
        if (i === 0) this.setWinAnimationArray(WinPos.row1);        // First row
        else if (i === 1) this.setWinAnimationArray(WinPos.row2);   // Second row
        else if (i === 2) this.setWinAnimationArray(WinPos.row3);   // Third row
        return true;
      }
    }
    // Check columns
    for (let i = 0; i <= 2; i++) {
      if (this.oArray[0][i] && this.oArray[1][i] && this.oArray[2][i]) {
        this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
        if (i === 0) this.setWinAnimationArray(WinPos.col1);        // First column
        else if (i === 1) this.setWinAnimationArray(WinPos.col2);   // Second column
        else if (i === 2) this.setWinAnimationArray(WinPos.col3);   // Third column
        return true;
      }
    }
    // Check diagonal left
    if (this.oArray[0][0] && this.oArray[1][1] && this.oArray[2][2]) {
      this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
      this.setWinAnimationArray(WinPos.left);
      return true;
    }
    // Check diagonal right
    if (this.oArray[0][2] && this.oArray[1][1] && this.oArray[2][0]) {
      this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
      this.setWinAnimationArray(WinPos.right);
      return true;
    }

    return false;
  }

  /**
   * Sets the the board positions in fadeArray[] that should fade
   * Positions that are left false will turn blue
   * @param winPosition row, col, or slant of win condition
   */
  setWinAnimationArray(winPosition: WinPos) {
    switch (winPosition) {
      case WinPos.row1: { // Win positions: 1, 2, 3
        for (let i = 3; i <= 8; i++) this.greyArray[i] = true;
        break;
      }
      case WinPos.row2: { // Win positions: 3, 4, 5
        for (let i = 0; i <= 2; i++) this.greyArray[i] = true;
        for (let i = 6; i <= 8; i++) this.greyArray[i] = true;
        break;
      }
      case WinPos.row3: { // Win positions: 6, 7, 8
        for (let i = 0; i <= 5; i++) this.greyArray[i] = true;
        break;
      }
      case WinPos.col1: { // Win positions: 0, 3, 6
        for (let i = 1; i <= 8; i++) {
          if (i !== 3 && i !== 6) this.greyArray[i] = true; // Don't set winning column
        }
        break;
      }
      case WinPos.col2: { // Win positions: 1, 4, 7
        for (let i = 0; i <= 8; i++) {
          if (i !== 1 && i !== 4 && i !== 7) this.greyArray[i] = true; // Don't set winning column
        }
        break;
      }
      case WinPos.col3: { // Win positions: 2, 5, 8
        for (let i = 0; i <= 7; i++) {
          if (i !== 2 && i !== 5) this.greyArray[i] = true; // Don't set winning column
        }
        break;
      }
      case WinPos.left: { // Win positions: 0, 4, 8 (\)
        for (let i = 1; i <= 3; i++) this.greyArray[i] = true;
        for (let i = 5; i <= 7; i++) this.greyArray[i] = true;
        break;
      }
      case WinPos.left: { // Win positions: 2, 4, 6 (/)
        for (let i = 0; i <= 8; i++) {
          if (i !== 2 && (i !== 4 && i !== 6)) this.greyArray[i] = true; // Don't set winning column
        }
        break;
      }
    }

    this.gameOver = true;
  }

  /** Main handler for Mr. Roboto's turn */
  robotMove(isFirstTurn?: boolean) {
    // Play in one of the corners for the first move
    if (isFirstTurn === true) {
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

    if (this.findMrRobotoWin()) {
      this.toggleWhosTurn();
      return;
    }
    if (this.blockOpponentWin()) {
      this.toggleWhosTurn();
      return;
    }
    this.robotRandMove();
    this.toggleWhosTurn();
  }

  /** Determines a valid random move for Mr. Roboto */
  robotRandMove() {
    let moveNotFound = true;
    let row: number;
    let col: number;
    const legalMoves = this.getLegalMoves();

    while (moveNotFound) {
      if (this.numTurns >= 9) {
        this.openDrawSnackBar();
        break;
      }

      row = this.getRandomInt(3);
      col = this.getRandomInt(3);
      if (legalMoves[row][col] === true) {
        this.oArray[row][col] = true;
        moveNotFound = false;
        return;
      }
    }
  }

  /**
   * Finds any winning moves for Mr. Roboto and executes them
   * @returns {boolean} true if Mr. Roboto executed a winning placement
   */
  findMrRobotoWin(): boolean {
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
      if (this.oArray[0][2] && this.oArray[1][1] && legalMoves[2][0]) {
        this.oArray[2][0] = true;
        return true;
      }
      if (this.oArray[0][2] && this.oArray[2][0] && legalMoves[1][1]) {
        this.oArray[1][1] = true;
        return true;
      }
      if (this.oArray[1][1] && this.oArray[2][0] && legalMoves[0][2]) {
        this.oArray[0][2] = true;
        return true;
      }
    }

    return false;
  }

  /**
   * Finds any two-in-a-row's and executes move for Mr. Roboto to block them
   * @returns {boolean} true if the opponents potential win was killed.
   */
  blockOpponentWin(): boolean {
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
      } else if (this.xArray[0][2] && this.xArray[2][0] && legalMoves[1][1]) {
        this.oArray[1][1] = true;
        return true;
      } else if (this.xArray[1][1] && this.xArray[2][0] && legalMoves[0][2]) {
        this.oArray[0][2] = true;
        return true;
      }
    }

    return false;
  }

  /** @returns {boolean[][]} 2D array of valid moves a player may execute */
  getLegalMoves(): boolean[][] {
    const legalMoves = [[true, true, true], [true, true, true], [true, true, true]];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.xArray[i][j] || this.oArray[i][j]) legalMoves[i][j] = false;
      }
    }
    return legalMoves;
  }

  /**
   * @param max The max value of the random integer (non-inclusive)
   * @returns {number} a random number between 0 and max
   */
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /** @returns {boolean} true if it is Mr. Roboto's turn */
  isRobotTurn(): boolean {
    if (!this.whosTurn && this.isRobot) return true;
    return false;
  }

  /** Opens GameWinDialog */
  openGameWinDialog() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(
        GameWinDialogComponent, {
          data: {
            winner: this.winner,
            isRobot: this.isRobot
          }
        }
      );

      dialogRef.afterClosed().subscribe(() => {
        this.resetBoard();
      });
    }, 925);
  }

  /** Opens ChooseCompetitorDialog */
  openChooseCompetitorDialog() {
    const dialogRef = this.dialog.open(
      ChooseCompetitorDialogComponent, { data: { } }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.initBoard();
      this.isRobot = result;
      if (this.isRobot && !this.whosTurn) this.robotMove(true);

      if (this.isRobot !== true) {
        this.snackBar.open(`We all know you're really playing against yourself`, '', {
          duration: 2500
        });
      } else {
        this.snackBar.open(`You are player X`, 'Dismiss', {
          duration: 3000
        });
      }
    });
  }

  /**
   * Opens snackbar to notify players of a draw
   * Initializes board after snackbar closes
   * @param message Snackbar message
   * @param action Text for button on the right side of snackbar
   */
  openDrawSnackBar() {
    const snackBarRef = this.snackBar.open(`It's a draw!`, 'Reset Board');

    snackBarRef.onAction().subscribe(() => {
      this.resetBoard();
    });
  }

}
