import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  // ОБОВ'ЯЗКОВО імпортуємо FormsModule для шаблонних форм
  imports: [FormsModule, CommonModule], 
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss' // або .css, якщо в тебе згенерувався css
})
export class ContactFormComponent {
  // Наша модель даних, куди форма буде записувати значення
  model = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Дані шаблонної форми:', this.model);
      this.submitted = true;
      // В наступних кроках додамо тут POST-запит на сервер
    }
  }
}