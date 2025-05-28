import type { Question as QuestionType } from '../types/game';
import { ProgressBar } from './ProgressBar';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answerIndex: number) => void;
  showExplanation: boolean;
  selectedAnswer: number | null;
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function Question({
  question,
  onAnswer,
  showExplanation,
  selectedAnswer,
  currentQuestion,
  totalQuestions,
  onNext,
  onPrevious,
}: QuestionProps) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <ProgressBar current={currentQuestion} total={totalQuestions} />
      </div>

      <div className="bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-[#00FFFF] shadow-lg">
        <h2 className="text-2xl font-bold mb-6 neon-text">{question.question}</h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                showExplanation
                  ? index === question.correctAnswer
                    ? 'correct-answer'
                    : selectedAnswer === index
                    ? 'wrong-answer'
                    : 'bg-white bg-opacity-5'
                  : selectedAnswer === index
                  ? 'bg-[#00FFFF] bg-opacity-20 border border-[#00FFFF]'
                  : 'neon-button hover:bg-[#00FFFF] hover:bg-opacity-10'
              }`}
            >
              <span className="text-lg">{option}</span>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-8 space-y-6">
            <div className="bg-[#9D00FF] bg-opacity-10 rounded-lg p-6 border border-[#9D00FF]">
              <h3 className="font-bold text-[#9D00FF] text-xl mb-3">Explicação:</h3>
              <p className="text-gray-300">{question.explanation}</p>
            </div>

            <div className="bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-[#39FF14]">
              <h3 className="font-bold text-[#39FF14] text-xl mb-3">Demonstração:</h3>
              <pre className="bg-black bg-opacity-50 p-6 rounded-lg overflow-x-auto">
                <code className="text-[#00FFFF]">{question.demonstration.code}</code>
              </pre>
              <p className="mt-4 text-gray-300">{question.demonstration.description}</p>
            </div>

            
            <div className="flex justify-between mt-8">
              <button
                onClick={onPrevious}
                className="px-6 py-3 rounded-lg border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition"
                disabled={currentQuestion === 1}
              >
                Voltar
              </button>

              <button
                onClick={onNext}
                className="px-6 py-3 rounded-lg border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition"
              >
                {currentQuestion === totalQuestions ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
