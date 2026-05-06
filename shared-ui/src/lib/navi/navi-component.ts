import { Component, input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

/**
 *an example of a component that can be used in the navigation menu.
 *It uses the MatSidenavModule to create a side navigation menu.
 *The template and styles for this component are defined in separate files.
 */
@Component({
  selector: 'temp-navi-component',
  imports: [MatSidenavModule],
  templateUrl: './navi-component.html',
  styleUrl: './navi-component.scss',
})
export class NaviComponent {
  // STATE
  // INPUT
  opened = input<boolean>(false);
  // OUTPUT
}
