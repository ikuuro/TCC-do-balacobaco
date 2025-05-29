// src/components/PlenoIntro.tsx
/**
 * Componente de introdução para as questões da categoria Pleno.
 * Exibe um texto explicativo antes do início do questionário.
 */
export function PlenoIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#39FF14] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Pleno!</h2>
      <p className="text-lg text-gray-200 mb-4">
        As questões da categoria <span className="text-[#39FF14] font-semibold">Pleno</span> são ideais para quem já domina os fundamentos e deseja avançar para tópicos intermediários de <span className="font-semibold">JavaScript</span>, <span className="font-semibold">HTML</span> e <span className="font-semibold">CSS</span>.
      </p>
      <p className="text-gray-300">
        Prepare-se para desafios que exigem raciocínio lógico, compreensão de conceitos modernos e aplicação prática. Cada pergunta traz explicações e exemplos para consolidar seu aprendizado. Continue evoluindo e mostre seu potencial!
      </p>
    </div>
  );
}
