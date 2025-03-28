import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

// GSAP für Animationen
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Komponenten
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Nicolas Kocher';
  private isBrowser: boolean;

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // GSAP registrieren
      gsap.registerPlugin(ScrollTrigger);

      // Scroll-Animationen einrichten
      setTimeout(() => {
        this.initScrollAnimations();
      }, 100);
    }
  }

  private initScrollAnimations() {
    if (!this.isBrowser) {
      return;
    }

    // Fade-in-Animationen
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => element.classList.add('active'),
      });
    });

    // Slide-up-Animationen
    const slideElements = document.querySelectorAll('.slide-up');
    slideElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => element.classList.add('active'),
      });
    });
  }
}
