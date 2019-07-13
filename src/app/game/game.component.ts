import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GameWinDialogComponent } from './game-win-dialog/game-win-dialog.component';

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
  xWon: boolean;
  oWon: boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initBoard();
  }

  initBoard() {
    this.xArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.oArray = [[false, false, false], [false, false, false], [false, false, false]];
    this.whosTurn = true;
    this.xWon = false;
    this.oWon = false;
  }

  toggleWhosTurn() {
    this.whosTurn = !this.whosTurn;
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
  }

  checkForWinner() {
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

}
