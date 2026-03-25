import { Component, Output, EventEmitter } from '@angular/core'; // <-- Додали Output та EventEmitter
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skill-form.html',
  styleUrl: './skill-form.scss'
})
export class SkillFormComponent {
  // Створюємо "передавач", який відправить навичку наверх в app.ts
  @Output() newSkillAdded = new EventEmitter<{name: string, level: number}>();

  skillForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    level: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
  });

  submitted = false;

  onSubmit() {
    if (this.skillForm.valid) {
      // Явно дістаємо значення і перетворюємо рівень на число
      const newSkill = {
        name: this.skillForm.value.name as string,
        level: Number(this.skillForm.value.level)
      };

      this.newSkillAdded.emit(newSkill);
      this.submitted = true;
    }
  }

  get name() { return this.skillForm.get('name'); }
  get level() { return this.skillForm.get('level'); }
}