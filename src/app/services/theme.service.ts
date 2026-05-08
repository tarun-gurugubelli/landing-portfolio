import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private _theme = signal<'light' | 'dark'>('dark');
  readonly theme = this._theme.asReadonly();

  constructor() {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark' | null;
    const initial: 'light' | 'dark' = saved ?? 'dark';
    this._theme.set(initial);
    this.applyTheme(initial);
  }

  toggle() {
    const next: 'light' | 'dark' = this._theme() === 'dark' ? 'light' : 'dark';
    this._theme.set(next);
    localStorage.setItem('theme', next);
    this.applyTheme(next);
  }

  private applyTheme(theme: 'light' | 'dark') {
    const html = this.document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
