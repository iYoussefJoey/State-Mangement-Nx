import { Component, inject, input, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  LucideMoon,
  LucidePanelLeftClose,
  LucidePanelRightClose,
  LucideSun,
} from '@lucide/angular';
import { LightDarkService } from 'core';
/**
 * This component represents the header of the application.
 */
@Component({
  selector: 'temp-header-component',
  imports: [
    MatToolbarModule,
    LucidePanelLeftClose,
    LucidePanelRightClose,
    LucideSun,
    LucideMoon,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  // DI
  themeService = inject(LightDarkService);
  // STATE
  isToggle = false;
  // INPUT
  opened = input<boolean>(false);

  //OUTPUT
  toggleSide = output<void>();
  // Public functions
}
