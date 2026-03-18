import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Важливо: перевір шлях до інтерфейсу CVData. 
// Якщо він у app.ts, то імпортуй звідти:
import { CVData } from '../app'; 

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume';

  constructor(private http: HttpClient) {}

  getResumeData(): Observable<CVData> {
    return this.http.get<CVData>(this.apiUrl);
  }

  updateResumeData(data: CVData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}