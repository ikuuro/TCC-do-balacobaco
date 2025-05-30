
export function JuniorIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#00FFFF] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Júnior!</h2>
      <p className="text-lg text-gray-200 mb-4">
        <span className="text-[#00FFFF] font-semibold">JavaScript</span> é uma linguagem de programação essencial para desenvolvimento web, e conhecer seus fundamentos é o primeiro passo para evoluir como desenvolvedor. Abaixo estão conceitos importantes para iniciantes:.
      </p>
      <p className="text-gray-300">
      <h3><span className="text-[#00FFFF] font-semibold">Declaração de Variáveis:</span></h3>
Para criar variáveis, usamos palavras-chave como let, const ou var. A mais comum atualmente é let, que tem escopo de bloco, o que evita conflitos de nomes e comportamentos inesperados.

<h3><span className="text-[#00FFFF] font-semibold">Comparações:</span></h3>
JavaScript possui dois tipos principais de operadores de comparação: == (compara apenas valores) e === (compara valores e tipos). Sempre prefira === para evitar erros com coerção de tipos.

<h3><span className="text-[#00FFFF] font-semibold">Tipo de null:</span></h3>
Embora null represente a ausência intencional de valor, o operador typeof retorna "object" por uma peculiaridade antiga da linguagem.

<h3><span className="text-[#00FFFF] font-semibold">Conversão de String para Número:</span></h3>
Para transformar uma string numérica em um número inteiro, usamos parseInt(). Se a string for inválida (ex: letras), o retorno será NaN.

<h3><span className="text-[#00FFFF] font-semibold">O que é NaN:</span></h3>
NaN significa "Not-a-Number" e aparece quando uma operação que deveria resultar em número falha, como tentar converter texto não numérico para número.

<h3><span className="text-[#00FFFF] font-semibold">Valor padrão de variáveis não inicializadas:</span></h3>
Variáveis declaradas mas não inicializadas automaticamente recebem o valor undefined, indicando que ainda não foi atribuído nenhum valor a elas.
      </p>
    </div>
  );
}
//<span className="text-[#00FFFF] font-semibold">Júnior</span> 