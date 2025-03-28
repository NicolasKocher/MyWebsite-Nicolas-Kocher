import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  technicalSkills: Skill[] = [
    { name: 'HTML/CSS', icon: 'fab fa-html5', level: 90 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
    { name: 'TypeScript', icon: 'fab fa-js', level: 80 },
    { name: 'Angular', icon: 'fab fa-angular', level: 70 },
    { name: 'React', icon: 'fab fa-react', level: 65 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
  ];

  softSkills: string[] = [
    'Problemlösungskompetenz',
    'Teamarbeit',
    'Kommunikation',
    'Zeitmanagement',
    'Adaptionsfähigkeit',
    'Kreativität',
  ];

  constructor() {}

  ngOnInit(): void {}
}
