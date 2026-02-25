import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  profilePic: string;
  about: string;
}

interface Contact {
  phone: string;
  website: string;
  address: string;
}

interface EducationItem {
  university: string;
  degree: string;
  years: string;
}

interface ReferenceItem {
  name: string;
  lines: string[];
}

interface JobItem {
  title: string;
  company: string;
  years: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
}

interface CVData {
  profile: Profile;
  contact: Contact;
  education: EducationItem[];
  references: ReferenceItem[];
  experience: JobItem[];
  skills: Skill[];
  languages: string[];
  hobbies: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  cvData: CVData | null = null;
  errorMessage: string | null = null;

  sectionsOpen: { [key: string]: boolean } = {
    about: false,
    experience: false,
    skills: false,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch('data/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.cvData = await response.json();
      this.cdr.detectChanges(); // <- це вирішить проблему
    } catch (error) {
      console.error('Could not load CV data:', error);
      this.errorMessage = 'Не вдалося завантажити дані резюме.';
      this.cdr.detectChanges();
    }
  }

  toggleSection(section: string): void {
    this.sectionsOpen[section] = !this.sectionsOpen[section];
  }
}