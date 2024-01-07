import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type ResultMap = {
  [key: string]: any;
};

type CountMap = {
  [key: string]: number;
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizUrl = '../assets/data/quizz_questions.json';

  constructor(private http: HttpClient) { }

  getQuizQuestions(): Observable<any> {
    return this.http.get(this.quizUrl);
  }

  calculateResult(answers: string[], results: ResultMap): any {
    const count: CountMap = {};
    answers.forEach(answer => {
      count[answer] = (count[answer] || 0) + 1;
    });

    let maxCount = 0;
    let resultAlias = '';
    for (const [key, value] of Object.entries(count)) {
      if (value > maxCount) {
        maxCount = value;
        resultAlias = key;
      }
    }

    if (results[resultAlias] === undefined) {
      console.error('Resultado não encontrado para o alias:', resultAlias);
      return null; // ou alguma outra lógica de fallback
    }
    return results[resultAlias];
  }
}
