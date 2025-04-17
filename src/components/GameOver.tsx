import React from 'react';
import { Trophy, RefreshCw, Star, Clock } from 'lucide-react';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  elapsedTime: number;
}

export function GameOver({ score, totalQuestions, onRestart, elapsedTime }: GameOverProps) {
  const percentage = (score / totalQuestions) * 100;
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = (elapsedTime % 60).toString().padStart(2, '0');

  return (
    <div className="max-w-xl mx-auto text-center p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] via-[#9D00FF] to-[#39FF14] blur-xl opacity-20" />
        <div className="relative bg-black bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm border border-[#00FFFF]">
          <Trophy className="w-24 h-24 mx-auto text-[#39FF14] mb-6 floating" />
          <h2 className="text-3xl font-bold mb-6 neon-text">Missão Cumprida!</h2>
          
          <div className="bg-white bg-opacity-5 rounded-xl p-8 mb-8 space-y-4">
            <div className="flex items-center justify-center gap-2">
              {[...Array(Math.ceil(percentage / 20))].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#00FFFF] animate-pulse" />
              ))}
            </div>
            <p className="text-5xl font-bold text-[#00FFFF] neon-text">
              {percentage.toFixed(0)}%
            </p>
            <p className="text-xl text-gray-300">
              Você acertou {score} de {totalQuestions} questões
            </p>

            <div className="flex items-center justify-center gap-2 text-[#00FFFF] mt-4">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Tempo total: {minutes}:{seconds}</span>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="neon-button flex items-center justify-center gap-3 mx-auto px-8 py-4 rounded-full text-lg font-bold text-[#39FF14]"
          >
            <RefreshCw className="w-6 h-6" />
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
}
