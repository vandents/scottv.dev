import { Component } from '@angular/core';
import { SharedModule } from '@app/shared.module';


/** Page displayed when user navigates to an unknown url */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent { }
