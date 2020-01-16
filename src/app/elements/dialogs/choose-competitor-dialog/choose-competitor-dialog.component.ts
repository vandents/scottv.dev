import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserService } from '@services/browser-service/browser.service';

/** Dialog to choosing playing against Mr. Robot or a friend */
@Component({
  selector: 'app-choose-competitor-dialog',
  templateUrl: './choose-competitor-dialog.component.html',
  styleUrls: ['./choose-competitor-dialog.component.css']
})
export class ChooseCompetitorDialogComponent implements OnInit {

  constructor(
    public browser: BrowserService,
    public dialogRef: MatDialogRef<ChooseCompetitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeDialog(isRobot: boolean) {
    this.dialogRef.close(isRobot);
  }

}
