import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme-mode';
  private darkMode = new BehaviorSubject<boolean>(true); // Standardmäßig Dark Mode aktivieren
  darkMode$ = this.darkMode.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.initTheme();
  }

  initTheme(): void {
    // Prüfe, ob wir im Browser sind
    if (this.isBrowser) {
      // Prüfe gespeicherten Wert oder verwende Dark Mode als Standard
      const savedTheme = localStorage.getItem(this.themeKey) as ThemeMode;
      const isDarkMode = savedTheme ? savedTheme === 'dark' : true;
      this.setTheme(isDarkMode);
    } else {
      // Im Server-Kontext immer Dark Mode als Standard verwenden
      this.setThemeWithoutStorage(true);
    }
  }

  setTheme(isDark: boolean): void {
    this.darkMode.next(isDark);

    if (this.isBrowser) {
      localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
      this.updateDocumentClass(isDark);
    }
  }

  // Spezielle Methode für serverseitigen Kontext
  private setThemeWithoutStorage(isDark: boolean): void {
    this.darkMode.next(isDark);
    this.updateDocumentClass(isDark);
  }

  private updateDocumentClass(isDark: boolean): void {
    if (this.isBrowser) {
      if (isDark) {
        // Nur hinzufügen/entfernen wenn nötig, um Flackern zu reduzieren
        if (!document.documentElement.classList.contains('dark-theme')) {
          document.documentElement.classList.add('dark-theme');
        }
        document.documentElement.classList.remove('light-theme');
      } else {
        // Nur hinzufügen/entfernen wenn nötig, um Flackern zu reduzieren
        if (!document.documentElement.classList.contains('light-theme')) {
          document.documentElement.classList.add('light-theme');
        }
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }

  toggleTheme(): void {
    this.setTheme(!this.darkMode.value);
  }
}
