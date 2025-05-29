// src/components/SeniorIntro.tsx
/**
 * Componente de introdução para as questões da categoria Sênior.
 * Exibe um texto explicativo antes do início do questionário.
 */
export function SeniorIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#9D00FF] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Sênior!</h2>
      <p className="text-lg text-gray-200 mb-4">
        As questões da categoria <span className="text-[#9D00FF] font-semibold">Sênior</span> são voltadas para quem busca desafios avançados em <span className="font-semibold">JavaScript</span>, <span className="font-semibold">HTML</span> e <span className="font-semibold">CSS</span>.
      </p>
      <p className="text-gray-300">
        Aqui você enfrentará perguntas que exigem domínio de conceitos complexos, resolução de problemas e pensamento crítico. Cada questão é uma oportunidade de se destacar e aprofundar ainda mais seu conhecimento. Boa sorte e mostre toda sua expertise!
      </p>
    </div>
  );
}
