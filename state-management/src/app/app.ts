import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NaviComponent, HeaderComponent } from 'shared-ui';

/**
 *
 */
@Component({
  imports: [
    NxWelcome,
    RouterModule,
    MatSidenavModule,
    NaviComponent,
    HeaderComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // STATE
  events: string[] = [];
  isOpened = false;
  protected title = 'state-management';
  // Public functions
  /**
   * This function is called when the user clicks on the menu button in the header component.
   */
  toggleSideNav(): void {
    this.isOpened = !this.isOpened;
  }
}
