import { effect, Injectable, signal } from '@angular/core';

/**
 * This service manages the light and dark theme of the application.
 * It uses a signal to track whether dark mode is enabled and an effect to update the theme when the signal changes.
 */
@Injectable({
  providedIn: 'root',
})
export class LightDarkService {
  isDarkMode = signal<boolean>(localStorage.getItem('theme') === 'dark');
  /**
   * This constructor sets up an effect that listens for changes to the isDarkMode signal.
   *  When the signal changes, it updates the class on the document element and saves the theme preference in localStorage.
   */
  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
  /**
   * This function is called when the user clicks on the toggle theme button in the header component.
   * It toggles the isDarkMode signal, which in turn updates the theme of the application.
   */
  toggleTheme(): void {
    this.isDarkMode.update((dark) => !dark);
  }
}
