import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  quiz: any;
  currentQuestionIndex: number = 0;
  answers: {[key: string]: string} = {};
  result: any;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizQuestions().subscribe(data => {
      this.quiz = data;
    });
  }

  setAnswer(questionId: string, answer: string): void {
    this.answers[questionId] = answer;
    if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submitQuiz();
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.result = null;
  }

  submitQuiz(): void {
    const resultMap = this.quizService.calculateResult(Object.values(this.answers), this.quiz.results);
    this.result = resultMap;
  }
}
