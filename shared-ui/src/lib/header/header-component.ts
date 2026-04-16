import { Component, input, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LucidePanelLeftClose, LucidePanelRightClose } from '@lucide/angular';

/**
 *
 */
@Component({
  selector: 'temp-header-component',
  imports: [MatToolbarModule, LucidePanelLeftClose, LucidePanelRightClose],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  // STATE
  isToggle = false;
  // INPUT
  opened = input<boolean>(false);

  //OUTPUT
  toggleSide = output<void>();
  // Public functions
}
