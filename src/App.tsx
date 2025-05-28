import React, { useState } from 'react';
import { Star, Trophy, Zap } from 'lucide-react';
import { LevelSelection } from './components/LevelSelection';
import { Question } from './components/Question';
import { GameOver } from './components/GameOver';
import { questions } from './data/questions';
import type { GameState } from './types/game';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState<any>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: null,
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
    gameStarted: false,
    gameFinished: false,
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLevelSelect = (level: 'junior' | 'pleno' | 'senior') => {
    const levelQuestions = questions
      .filter(q => q.level === level)
      .map(q => ({
        ...q,
        options: [...q.options],
      }));
    setGameState({
      ...gameState,
      currentLevel: level,
      questions: levelQuestions,
      gameStarted: true,
    });
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
      setGameState(prev => ({ ...prev, score: prev.score + 1 }));
    }
  };

  const handleNextQuestion = () => {
    if (gameState.currentQuestionIndex === gameState.questions.length - 1) {
      setGameState(prev => ({ ...prev, gameFinished: true }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }

    setSelectedAnswer(null);
    setShowExplanation(false);
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
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (showLogin || !user) {
    return <Login onLogin={u => { setUser(u); setShowLogin(false); }} />;
  }

  return (
    <div className="min-h-screen grid-background">
      <header className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-[#00FFFF]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-10 h-10 text-[#00FFFF]" />
              <h1 className="text-4xl font-bold neon-text">SkillCode</h1>
            </div>
            <button
              className="px-4 py-2 rounded bg-[#00FFFF] text-black font-bold shadow hover:bg-[#39FF14] transition"
              onClick={() => setShowLogin(true)}
              style={{ marginLeft: 16 }}
            >
              Login
            </button>
            {gameState.gameStarted && !gameState.gameFinished && (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#39FF14]" />
                  <span className="text-[#39FF14] font-bold">{gameState.score}</span>
                </div>
                <div className="text-gray-300">
                  {gameState.currentQuestionIndex + 1} / {gameState.questions.length}
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
            question={gameState.questions[gameState.currentQuestionIndex]}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
            selectedAnswer={selectedAnswer}
            currentQuestion={gameState.currentQuestionIndex + 1}
            totalQuestions={gameState.questions.length}
            onNext={handleNextQuestion} // <- aqui está a mágica
          />
        )}

        {gameState.gameFinished && (
          <GameOver
            score={gameState.score}
            totalQuestions={gameState.questions.length}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}

export default App;
