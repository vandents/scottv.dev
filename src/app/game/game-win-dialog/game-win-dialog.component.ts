import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Dialog displayed when a player wins */
@Component({
  selector: 'app-game-win-dialog',
  templateUrl: './game-win-dialog.component.html',
  styleUrls: ['./game-win-dialog.component.css']
})
export class GameWinDialogComponent implements OnInit {
  playerName: string;

  constructor(
    public dialogRef: MatDialogRef<GameWinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.playerName = data.winner;
  }

  ngOnInit() {
  }

}
