import React, { useState, useEffect } from 'react';
import { Star, Trophy, Zap } from 'lucide-react';
import { LevelSelection } from './components/LevelSelection';
import { Question } from './components/Question';
import { GameOver } from './components/GameOver';
import { questions } from './data/questions';
import type { GameState } from './types/game';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: null,
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
    gameStarted: false,
    gameFinished: false,
  });

  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const currentIndex = gameState.currentQuestionIndex;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState.gameStarted && !gameState.gameFinished) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - (startTime ?? Date.now()));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameState.gameStarted, gameState.gameFinished, startTime]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleLevelSelect = (level: 'junior' | 'pleno' | 'senior') => {
    const levelQuestions = questions.filter(q => q.level === level);
    setGameState({
      ...gameState,
      currentLevel: level,
      questions: levelQuestions,
      gameStarted: true,
    });
    setAnswers(Array(levelQuestions.length).fill(null));
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = gameState.questions[currentIndex];
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = answerIndex;
    setAnswers(updatedAnswers);

    if (
      answers[currentIndex] === null &&
      answerIndex === currentQuestion.correctAnswer
    ) {
      setGameState(prev => ({ ...prev, score: prev.score + 1 }));
    }

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex === gameState.questions.length - 1) {
      setGameState(prev => ({ ...prev, gameFinished: true }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      setShowExplanation(answers[currentIndex + 1] !== null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
      setShowExplanation(answers[currentIndex - 1] !== null);
    }
  };

  const handleRestart = () => {
    setGameState({
      currentLevel: null,
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
      gameStarted: false,
      gameFinished: false,
    });
    setAnswers([]);
    setShowExplanation(false);
    setStartTime(null);
    setElapsedTime(0);
  };

  return (
    <div className="min-h-screen grid-background">
      <header className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-[#00FFFF]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-10 h-10 text-[#00FFFF]" />
              <button onClick={handleRestart}><h1 className="text-4xl font-bold neon-text">SkillCode</h1></button>
            </div>
            {gameState.gameStarted && !gameState.gameFinished && (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#39FF14]" />
                  <span className="text-[#39FF14] font-bold">{gameState.score}</span>
                </div>
                <div className="text-gray-300">
                  {currentIndex + 1} / {gameState.questions.length}
                </div>
                <div className="text-[#00FFFF] font-mono text-sm">
                  ⏱️ {formatTime(elapsedTime)}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {!gameState.gameStarted && (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 neon-text">
                Escolha seu nível
              </h2>
              <p className="text-xl text-gray-300">
                Domine o desenvolvimento web através do código
              </p>
            </div>
            <LevelSelection onSelectLevel={handleLevelSelect} />
          </>
        )}

        {gameState.gameStarted && !gameState.gameFinished && (
          <Question
            question={gameState.questions[currentIndex]}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
            selectedAnswer={answers[currentIndex]}
            currentQuestion={currentIndex + 1}
            totalQuestions={gameState.questions.length}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
          />
        )}

        {gameState.gameFinished && (
          <GameOver
            score={gameState.score}
            totalQuestions={gameState.questions.length}
            onRestart={handleRestart}
            elapsedTime={Math.floor(elapsedTime / 1000)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
