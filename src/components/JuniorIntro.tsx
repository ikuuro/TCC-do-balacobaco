// src/components/JuniorIntro.tsx

/**
 * Componente de introdução para as questões da categoria Júnior.
 * Exibe um texto explicativo antes do início do questionário.
 */
export function JuniorIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#00FFFF] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Júnior!</h2>
      <p className="text-lg text-gray-200 mb-4">
        As questões da categoria <span className="text-[#00FFFF] font-semibold">Júnior</span> são voltadas para quem está começando no mundo do desenvolvimento web. Aqui, você irá testar e reforçar seus conhecimentos sobre os fundamentos de <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span> e <span className="font-semibold">JavaScript</span>.
      </p>
      <p className="text-gray-300">
        Não se preocupe se errar! Cada pergunta traz uma explicação detalhada e exemplos práticos para ajudar no seu aprendizado. Aproveite para praticar, aprender e evoluir no seu ritmo. Boa sorte e divirta-se codando!
      </p>
    </div>
  );
}
