export interface Question {
  id: number;
  level: 'junior' | 'pleno' | 'senior';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  demonstration: {
    code: string;
    description: string;
  };
}

export interface GameState {
  currentLevel: 'junior' | 'pleno' | 'senior' | null;
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  gameStarted: boolean;
  gameFinished: boolean;
}