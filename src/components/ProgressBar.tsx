import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-white bg-opacity-10 rounded-full h-4 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#00FFFF] via-[#9D00FF] to-[#39FF14] transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      >
        <div className="w-full h-full animate-pulse bg-white bg-opacity-20" />
      </div>
    </div>
  );
}