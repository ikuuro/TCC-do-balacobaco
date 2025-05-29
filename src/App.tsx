import React, { useState, useEffect } from 'react';
import { Star, Trophy, Zap } from 'lucide-react';
import { LevelSelection } from './components/LevelSelection';
import { Question } from './components/Question';
import { GameOver } from './components/GameOver';
import { questions } from './data/questions';
import type { GameState } from './types/game';
import { JuniorIntro } from './components/JuniorIntro';
import { PlenoIntro } from './components/PlenoIntro';
import { SeniorIntro } from './components/SeniorIntro';

function inicio(){
  window.location.href= './homepage/homepage.html'; 
};

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
  const [showJuniorIntro, setShowJuniorIntro] = useState(false);
  const [showPlenoIntro, setShowPlenoIntro] = useState(false);
  const [showSeniorIntro, setShowSeniorIntro] = useState(false);

  const currentIndex = gameState.currentQuestionIndex;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (gameState.gameStarted && !gameState.gameFinished) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - (startTime ?? Date.now()));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState.gameStarted, gameState.gameFinished, startTime]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  function toMutableQuestions(qs: any[]) {
    return qs.map(q => ({ ...q, options: Array.from(q.options) }));
  }

  const handleLevelSelect = (level: 'junior' | 'pleno' | 'senior') => {
    if (level === 'junior') {
      setShowJuniorIntro(true);
      setShowPlenoIntro(false);
      setShowSeniorIntro(false);
      setGameState({
        ...gameState,
        currentLevel: level,
        questions: [],
        gameStarted: false,
        gameFinished: false,
      });
      setAnswers([]);
      setStartTime(null);
      setElapsedTime(0);
      return;
    }
    if (level === 'pleno') {
      setShowPlenoIntro(true);
      setShowJuniorIntro(false);
      setShowSeniorIntro(false);
      setGameState({
        ...gameState,
        currentLevel: level,
        questions: [],
        gameStarted: false,
        gameFinished: false,
      });
      setAnswers([]);
      setStartTime(null);
      setElapsedTime(0);
      return;
    }
    if (level === 'senior') {
      setShowSeniorIntro(true);
      setShowJuniorIntro(false);
      setShowPlenoIntro(false);
      setGameState({
        ...gameState,
        currentLevel: level,
        questions: [],
        gameStarted: false,
        gameFinished: false,
      });
      setAnswers([]);
      setStartTime(null);
      setElapsedTime(0);
      return;
    }
  };

  const startJuniorQuestions = () => {
    const levelQuestions = toMutableQuestions(questions.filter(q => q.level === 'junior'));
    setGameState({
      ...gameState,
      currentLevel: 'junior',
      questions: levelQuestions,
      gameStarted: true,
      gameFinished: false,
    });
    setAnswers(Array(levelQuestions.length).fill(null));
    setStartTime(Date.now());
    setElapsedTime(0);
    setShowJuniorIntro(false);
  };

  const startPlenoQuestions = () => {
    const levelQuestions = toMutableQuestions(questions.filter(q => q.level === 'pleno'));
    setGameState({
      ...gameState,
      currentLevel: 'pleno',
      questions: levelQuestions,
      gameStarted: true,
      gameFinished: false,
    });
    setAnswers(Array(levelQuestions.length).fill(null));
    setStartTime(Date.now());
    setElapsedTime(0);
    setShowPlenoIntro(false);
  };

  const startSeniorQuestions = () => {
    const levelQuestions = toMutableQuestions(questions.filter(q => q.level === 'senior'));
    setGameState({
      ...gameState,
      currentLevel: 'senior',
      questions: levelQuestions,
      gameStarted: true,
      gameFinished: false,
    });
    setAnswers(Array(levelQuestions.length).fill(null));
    setStartTime(Date.now());
    setElapsedTime(0);
    setShowSeniorIntro(false);
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
            <div className="flex items-center gap-3">
              <button onClick={inicio}><h1 className='text-4x1 font-bold neon-text'>Ínicio</h1></button>
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
        {!gameState.gameStarted && !showJuniorIntro && !showPlenoIntro && !showSeniorIntro && (
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

        {showJuniorIntro && (
          <>
            <JuniorIntro />
            <div className="flex justify-center mt-8">
              <button
                className="neon-button px-8 py-4 text-xl font-bold rounded-lg"
                onClick={startJuniorQuestions}
              >
                Iniciar Questionário Júnior
              </button>
            </div>
          </>
        )}

        {showPlenoIntro && (
          <>
            <PlenoIntro />
            <div className="flex justify-center mt-8">
              <button
                className="neon-button px-8 py-4 text-xl font-bold rounded-lg"
                onClick={startPlenoQuestions}
              >
                Iniciar Questionário Pleno
              </button>
            </div>
          </>
        )}

        {showSeniorIntro && (
          <>
            <SeniorIntro />
            <div className="flex justify-center mt-8">
              <button
                className="neon-button px-8 py-4 text-xl font-bold rounded-lg"
                onClick={startSeniorQuestions}
              >
                Iniciar Questionário Sênior
              </button>
            </div>
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
