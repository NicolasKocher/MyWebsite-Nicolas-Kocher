import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  scrollTo(elementId: string): void {
    this.scrollService.scrollToElement(elementId);
  }
}
