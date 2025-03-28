import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    // Animation für Hero-Sektion
    const tl = gsap.timeline();

    tl.from('.hero-content h1', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        '.hero-content h2',
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-content .lead',
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-buttons',
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-image',
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      );
  }
}
