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

/** Values for a tile */
interface Board {
  x: boolean;
  o: boolean;
  winSpot: boolean;
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
    trigger('fastFade', [   // Board icons
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0.5 }), animate(300)]),
      transition(':leave', animate(350, style({ opacity: 0 })))
    ]),
    trigger('mediumFade', [ // "Current Player" icons
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0.2 }), animate(450)])
    ]),
    trigger('blue', [       // Winning icons
      state('in', style({ color: '#007bff' })),
      transition(':enter', [style({ opacity: 0.5 }), animate(400)]),
      transition(':leave', animate(350, style({ opacity: 0.3 })))
    ]),
    trigger('grey', [       // Losing icons
      state('in', style({ color: '#333333' })),
      transition(':enter', [style({ opacity: 0.5 }), animate(400)]),
      transition(':leave', animate(350, style({ opacity: 0.3 })))
    ])
  ]
})
export class GameComponent implements OnInit {
  /** True -> x's turn, false -> o/robot's turn */
  isTurnX: boolean;
  /** Various values for each tile */
  board: Board[] = [];
  numTurns: number;
  winner: Player;
  /** True if user is playing against Mr. Roboto */
  isRobot: boolean;
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

  /** Sets game and board values to an initial state */
  initBoard() {
    this.board = [];
    for (let i = 0; i <= 8; i++) this.board.push({ x: false, o: false, winSpot: false });
    this.isTurnX = Math.random() < 0.5,
    this.numTurns = 0;
    this.gameOver = false;
  }

  /** Initializes board. If it's Mr. Robot's turn after init robotMove() is called */
  resetBoard() {
    this.initBoard();
    if (this.isRobot && !this.isTurnX) {
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

  /** Toggles isTurnX and increments numTurns */
  toggleTurn() {
    this.isTurnX = !this.isTurnX;
    this.numTurns++;
  }

  /** Main game handler */
  squareClicked(tileNum: number) {
    const legalMoves = this.getLegalMoves();
    if (this.isRobotTurn() || this.gameOver || !legalMoves[tileNum]) return;

    if (this.isTurnX) {          // Place X icon
      this.board[tileNum].x = true;
      this.toggleTurn();
    } else if (!this.isRobot) {  // Place O icon
      this.board[tileNum].o = true;
      this.toggleTurn();
    }

    if (this.isRobotTurn()) {
      const turnTimeout = 700;
      if (this.checkForWinner()) this.openGameWinDialog();
      else {
        setTimeout(() => {
          this.robotMove();
          if (this.checkForWinner()) this.openGameWinDialog();
          else if (this.numTurns >= 9) this.openDrawSnackBar();
        }, turnTimeout);
      }
    } else {
      if (this.checkForWinner()) this.openGameWinDialog();
      else if (this.numTurns >= 9) this.openDrawSnackBar();
    }
  }

  /**
   * Sets xWon or oWon to true if win condition is found
   * @returns true if win condition is found
   */
  checkForWinner(): boolean {
    if (this.numTurns < 5) return false;  // Can't have win condition if less than 5 turns have been played

    /*** Rows ***/
    for (let i = 0; i <= 6; i += 3) {
      // Check X
      if (!(this.board[i].o || this.board[i + 1].o || this.board[i + 2].o)) { // Check that O isn't in the tile
        if (this.board[i].x && this.board[i + 1].x && this.board[i + 2].x) {
          this.winner = Player.x;
          if (i === 0) this.setWinAnimationArray(WinPos.row1);        // First row 0, 1, 2
          else if (i === 3) this.setWinAnimationArray(WinPos.row2);   // Second row 3, 4, 5
          else if (i === 6) this.setWinAnimationArray(WinPos.row3);   // Third row 6, 7, 8
          return true;
        }
      }
      // Check O
      if (!(this.board[i].x || this.board[i + 1].x || this.board[i + 2].x)) { // Check that X isn't in the tile
        if (this.board[i].o && this.board[i + 1].o && this.board[i + 2].o) {
          this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
          if (i === 0) this.setWinAnimationArray(WinPos.row1);        // First row 0, 1, 2
          else if (i === 3) this.setWinAnimationArray(WinPos.row2);   // Second row 3, 4, 5
          else if (i === 6) this.setWinAnimationArray(WinPos.row3);   // Third row 6, 7, 8
          return true;
        }
      }
    }
    /*** Columns ***/
    for (let i = 0; i <= 2; i++) {
      // Check X
      if (!(this.board[i].o || this.board[i + 3].o || this.board[i + 6].o)) { // Check that O isn't in the tile
        if (this.board[i].x && this.board[i + 3].x && this.board[i + 6].x) {
          this.winner = Player.x;
          if (i === 0) this.setWinAnimationArray(WinPos.col1);        // First column 0, 3, 6
          else if (i === 1) this.setWinAnimationArray(WinPos.col2);   // Second column 1, 4, 7
          else if (i === 2) this.setWinAnimationArray(WinPos.col3);   // Third column 2, 5, 8
          return true;
        }
      }
      // Check O
      if (!(this.board[i].x || this.board[i + 3].x || this.board[i + 6].x)) { // Check that X isn't in the tile
        if (this.board[i].o && this.board[i + 3].o && this.board[i + 6].o) {
          this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
          if (i === 0) this.setWinAnimationArray(WinPos.col1);        // First column 0, 3, 6
          else if (i === 1) this.setWinAnimationArray(WinPos.col2);   // Second column 1, 4, 7
          else if (i === 2) this.setWinAnimationArray(WinPos.col3);   // Third column 2, 5, 8
          return true;
        }
      }
    }
    /*** Diagonals ***/
    // Check X diagonal left 0, 4, 8 (\)
    if (this.board[0].x && this.board[4].x && this.board[8].x) {
      this.winner = Player.x;
      this.setWinAnimationArray(WinPos.left);
      return true;
    }
    // Check O diagonal left 0, 4, 8 (\)
    if (this.board[0].o && this.board[4].o && this.board[8].o) {
      this.isRobot ? this.winner = Player.robot : this.winner = Player.o;
      this.setWinAnimationArray(WinPos.left);
      return true;
    }
    // Check X diagonal right 2, 4, 6 (/)
    if (this.board[2].x && this.board[4].x && this.board[6].x) {
      this.winner = Player.x;
      this.setWinAnimationArray(WinPos.right);
      return true;
    }
    // Check O diagonal right 2, 4, 6 (/)
    if (this.board[2].o && this.board[4].o && this.board[6].o) {
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
    let i: number;
    switch (winPosition) {
      case WinPos.row1: { // Win positions: 0, 1, 2
        for (i = 0; i <= 2; i++) this.board[i].winSpot = true;
        break;
      }
      case WinPos.row2: { // Win positions: 3, 4, 5
        for (i = 3; i <= 5; i++) this.board[i].winSpot = true;
        break;
      }
      case WinPos.row3: { // Win positions: 6, 7, 8
        for (i = 6; i <= 8; i++) this.board[i].winSpot = true;
        break;
      }
      case WinPos.col1: { // Win positions: 0, 3, 6
        for (i = 0; i <= 6; i += 3) this.board[i].winSpot = true;
        break;
      }
      case WinPos.col2: { // Win positions: 1, 4, 7
        for (i = 1; i <= 7; i += 3) this.board[i].winSpot = true;
        break;
      }
      case WinPos.col3: { // Win positions: 2, 5, 8
        for (i = 2; i <= 8; i += 3) this.board[i].winSpot = true;
        break;
      }
      case WinPos.left: { // Win positions: 0, 4, 8 (\)
        for (i = 0; i <= 8; i += 4) this.board[i].winSpot = true;
        break;
      }
      case WinPos.right: { // Win positions: 2, 4, 6 (/)
        for (i = 2; i <= 6; i += 2) this.board[i].winSpot = true;
        break;
      }
      default: break;
    }

    this.gameOver = true;
  }

  /** Main handler for Mr. Roboto's turn */
  robotMove(isFirstTurn?: boolean) {
    // Play in one of the corners for the first move (0, 2, 6, 8)
    if (isFirstTurn === true) {
      let i: number;
      if (Math.random() < 0.5) i = this.getRandomInt(2) * 2;  // 0, 2
      else i = (this.getRandomInt(2) * 2) + 6;                // 6, 8
      this.board[i].o = true;
      this.toggleTurn();
      return;
    }

    if (this.strategicMove(false)) {  // Check for robot wins
      this.toggleTurn();
      return;
    }
    if (this.strategicMove(true)) {  // Check for blockable opponent wins
      this.toggleTurn();
      return;
    }
    // If no robot wins or blockable opponent wins place a move randomly
    this.randomMove();
    this.toggleTurn();
  }

  /** Determines a valid random move for Mr. Roboto */
  randomMove() {
    let moveNotFound = true;
    let tileNum: number;
    const legalMoves = this.getLegalMoves();

    while (moveNotFound) {
      if (this.numTurns >= 9) {
        this.openDrawSnackBar();
        return;
      }

      tileNum = this.getRandomInt(9);
      if (legalMoves[tileNum]) {
        this.board[tileNum].o = true;
        moveNotFound = false;
        return;
      }
    }
  }

  /**
   * Finds any winning moves for Mr. Roboto and executes them
   * @param block True -> search for blocking moves, False -> search for winning moves
   * @returns {boolean} true if Mr. Roboto executed a winning placement
   */
  strategicMove(block: boolean): boolean {
    let tally = 0;
    let move = 0;
    let i: number;
    let j: number;
    const legalMoves = this.getLegalMoves();

    /*** Rows: 0, 1, 2  ||  3, 4, 5  ||  6, 7, 8 ***/
    for (j = 0; j <= 6; j += 3) {
      tally = 0;
      for (i = 0; i <= 2; i++) {
        if (this.board[i + j].x && block) tally++;
        else if (block) move = i + j;
        if (this.board[i + j].o && !block) tally++;
        else if (!block) move = i + j;
      }
      if (tally === 2 && legalMoves[move]) {
        this.board[move].o = true;
        return true;
      }
    }
    /*** Columns: 0, 3, 6  ||  1, 4, 7  ||  2, 5, 8  ***/
    for (j = 0; j <= 2; j++) {
      tally = 0;
      for (i = 0; i <= 6; i += 3) {
        if (this.board[i + j].x && block) tally++;
        else if (block) move = i + j;
        if (this.board[i + j].o && !block) tally++;
        else if (!block) move = i + j;
      }
      if (tally === 2 && legalMoves[move]) {
        this.board[move].o = true;
        return true;
      }
    }
    /*** Diagonal ***/
    // Slant left 0, 4, 8 (\)
    tally = 0;
    for (i = 0; i <= 8; i += 4) {
      if (this.board[i].x && block) tally++;
      else if (block) move = i;
      if (this.board[i].o && !block) tally++;
      else if (!block) move = i;
    }
    if (tally === 2 && legalMoves[move]) {
      this.board[move].o = true;
      return true;
    }
    // Slant right 2, 4, 6 (\)
    tally = 0;
    for (i = 2; i <= 6; i += 2) {
      if (this.board[i].x && block) tally++;
      else if (block) move = i;
      if (this.board[i].o && !block) tally++;
      else if (!block) move = i;
    }
    if (tally === 2 && legalMoves[move]) {
      this.board[move].o = true;
      return true;
    }

    return false; // Could not place robot win move
  }

  /** @returns {boolean[]} Array of valid moves a player may execute */
  getLegalMoves(): boolean[] {
    const legalMoves = [true, true, true, true, true, true, true, true, true];
    for (let i = 0; i <= 8; i++) {
      if (this.board[i].o || this.board[i].x) legalMoves[i] = false;
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
    if (!this.isTurnX && this.isRobot) return true;
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
      if (this.isRobot && !this.isTurnX) this.robotMove(true);

      if (this.isRobot !== true) {
        this.snackBar.open(`We all know you're really playing against yourself`, '', {
          duration: 2500
        });
      } else {
        this.snackBar.open(`You are player X`, '', {
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
    this.snackBar.open(`Draw!`, '', { duration: 2500 });
    this.gameOver = true;
    setTimeout(() => {
      this.resetBoard();
    }, 2700);
  }

}
