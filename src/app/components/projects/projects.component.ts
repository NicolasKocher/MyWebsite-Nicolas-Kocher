import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  skills: string[];
  link?: string;
  location?: string;
  type?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'insert effect GmbH',
      position: 'Software Developer',
      period: 'März 2025 - Heute',
      description:
        'Im Lab arbeite ich gleichzeitig an verschiedenen innovativen Projekten und setze neue Ideen praktisch um. Dabei experimentiere ich gezielt mit aktuellen Technologien, entwickle Prototypen und unterstütze das Team aktiv bei der Realisierung technischer Lösungen. Im Vordergrund stehen dabei das Kennenlernen neuer Ansätze, die flexible Reaktion auf wechselnde Anforderungen und der Aufbau wertvoller Praxiserfahrung.',
      logo: 'assets/images/inserteffect-logo.jpeg',
      skills: [
        'Svelte Kit',
        'Prototypen',
        'KI Integrationen',
        'App-Entwicklung',
        'iOS',
        'Android',
      ],
      link: 'https://www.inserteffect.com/',
      location: 'Nürnberg, Bayern, Deutschland',
      type: 'Werkstudium • Hybrid',
    },
    {
      company: 'adesso SE',
      position: 'Praktikant in der Softwareentwicklung',
      period: 'Sept. 2024 - Feb. 2025',
      description:
        'Während meines Praxissemesters bei adesso SE habe ich den kompletten Lifecycle eines IT-Projekts begleitet. In einem rotierenden System habe ich verschiedene Rollen übernommen, darunter Requirements Engineer, Product Owner, Scrum Master und Software Engineer. Mein Fokus lag darauf, praxisnahe IT-Anwendungen zu entwickeln, neue Technologien zu erlernen und in einem dynamischen Team eng zusammenzuarbeiten.',
      logo: 'assets/images/adesso-logo.png',
      skills: [
        'Scrum',
        'IT-Projektmanagement',
        'Angular',
        'TypeScript',
        'Java',
        'Requirements Engineering',
      ],
      link: 'https://www.adesso.de/',
      location: 'Nürnberg',
      type: 'Praktikum • Vor Ort',
    },
    {
      company: 'paxray',
      position: 'Front-End Webentwickler',
      period: 'Feb. 2024 - Juli 2024',
      description:
        'Als Werkstudent bei Paxray habe ich Komponenten in Svelte mit individuellem Styling für vielfältige Anwendungen erstellt.',
      logo: 'assets/images/paxray-logo.jpeg',
      skills: ['Svelte', 'Notion', 'Web-Entwicklung', 'GitHub'],
      link: 'https://www.paxray.com/',
      location: 'Würzburg, Bayern, Deutschland',
      type: 'Werkstudium • Remote',
    },
    {
      company: 'Fraunhofer IIS',
      position: 'Front-End Webentwickler',
      period: 'Okt. 2023 - Feb. 2024',
      description:
        'In dieser Rolle als Werkstudent als Front-End Webentwickler hatte ich die Verantwortung für die Entwicklung einer internen Website übernommen. Dabei setzte ich meine Kenntnisse in HTML, CSS und JavaScript ein, unterstützt durch TypeScript und das React-Framework. Mein Hauptaugenmerk lag auf der Integration von Backend-Daten durch die Arbeit an den Schnittstellen mit einer API.',
      logo: 'assets/images/fraunhofer-logo.jpg',
      skills: [
        'Git',
        'React.js',
        'Frontend-Entwicklung',
        'JavaScript',
        'TypeScript',
        'API-Integration',
      ],
      link: 'https://www.iis.fraunhofer.de/',
      location: 'Erlangen, Bayern, Deutschland',
      type: 'Werkstudium • Vor Ort',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
