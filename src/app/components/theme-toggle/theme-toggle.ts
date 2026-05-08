import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  template: `
    <button
      (click)="themeService.toggle()"
      class="relative h-10 w-10 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <!-- Sun icon (visible in dark mode) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-900 dark:text-gray-100 transition-all duration-300"
        [class.hidden]="themeService.theme() === 'dark'"
      >
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
      <!-- Moon icon (visible in light mode) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-100 transition-all duration-300"
        [class.hidden]="themeService.theme() === 'light'"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    </button>
  `,
})
export class ThemeToggle {
  protected themeService = inject(ThemeService);
}
