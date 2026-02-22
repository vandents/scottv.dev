import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserService } from '@services/browser-service/browser.service';

/** Dialog to choosing playing against Mr. Robot or a friend */
@Component({
  standalone: false,
  selector: 'app-choose-competitor-dialog',
  templateUrl: './choose-competitor-dialog.component.html',
  styleUrls: ['./choose-competitor-dialog.component.scss']
})
export class ChooseCompetitorDialogComponent implements OnInit {
  public browser = inject(BrowserService);
  public dialogRef = inject(MatDialogRef<ChooseCompetitorDialogComponent>);
  public data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
  }

  closeDialog(isRobot: boolean) {
    this.dialogRef.close(isRobot);
  }

}
