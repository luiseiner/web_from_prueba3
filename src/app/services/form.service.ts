import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Response } from '../models/question.models';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'https://apiwebprueba.azurewebsites.net/api/ChatGPT'; // Cambiado a la ruta del proxy

  constructor(private http: HttpClient) { }

  sendQuestion(question: Question): Observable<Response> {
    return this.http.post<Response>(this.apiUrl, question);
  }
}
