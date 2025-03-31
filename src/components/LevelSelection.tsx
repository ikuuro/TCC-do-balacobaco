import React from 'react';
import { Code, BookOpen, Brain } from 'lucide-react';

interface LevelSelectionProps {
  onSelectLevel: (level: 'junior' | 'pleno' | 'senior') => void;
}

export function LevelSelection({ onSelectLevel }: LevelSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-6">
      <button
        onClick={() => onSelectLevel('junior')}
        className="neon-button group relative rounded-xl p-8 bg-opacity-10 backdrop-blur-sm transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#39FF14] opacity-0 group-hover:opacity-10 transition-opacity" />
        <Code className="w-16 h-16 text-[#00FFFF] mb-6 mx-auto floating" />
        <h3 className="text-2xl font-bold text-[#00FFFF] mb-4 neon-text">Júnior</h3>
        <p className="text-gray-300">Domine os fundamentos de HTML, CSS e JavaScript</p>
      </button>

      <button
        onClick={() => onSelectLevel('pleno')}
        className="neon-button group relative rounded-xl p-8 bg-opacity-10 backdrop-blur-sm transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9D00FF] to-[#00FFFF] opacity-0 group-hover:opacity-10 transition-opacity" />
        <BookOpen className="w-16 h-16 text-[#9D00FF] mb-6 mx-auto floating" />
        <h3 className="text-2xl font-bold text-[#9D00FF] mb-4 neon-text">Pleno</h3>
        <p className="text-gray-300">Aprofunde-se em conceitos avançados e boas práticas</p>
      </button>

      <button
        onClick={() => onSelectLevel('senior')}
        className="neon-button group relative rounded-xl p-8 bg-opacity-10 backdrop-blur-sm transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#39FF14] to-[#9D00FF] opacity-0 group-hover:opacity-10 transition-opacity" />
        <Brain className="w-16 h-16 text-[#39FF14] mb-6 mx-auto floating" />
        <h3 className="text-2xl font-bold text-[#39FF14] mb-4 neon-text">Sênior</h3>
        <p className="text-gray-300">Torne-se um especialista em arquitetura e padrões</p>
      </button>
    </div>
  );
}