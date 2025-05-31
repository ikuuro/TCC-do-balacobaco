
export function PlenoIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#39FF14] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Pleno!</h2>
      <p className="text-lg text-gray-200 mb-4">
      Este desafio foi criado para avaliar conhecimentos essenciais de <span className="font-semibold">JavaScript</span> no nível <span className="text-[#9D00FF] font-semibold">Pleno</span>. Ele aborda desde manipulação de arrays e eventos, até conceitos fundamentais como escopo de variáveis, hoisting, uso do this e diferenças entre execução síncrona e assíncrona. Prepare-se para testar sua compreensão e aplicar boas práticas da linguagem!.
      </p>
      <p className="text-gray-300">
      <h3><span className="text-[#9D00FF] font-semibold">Adicionar elementos em arrays:</span></h3> 
      O método push() adiciona elementos ao final de um array de forma simples e eficiente.

<h3><span className="text-[#9D00FF] font-semibold">Eventos e interatividade:</span></h3>
Para tratar eventos como cliques, o método recomendado é "addEventListener", que permite múltiplos ouvintes e maior controle.

<h3><span className="text-[#9D00FF] font-semibold">Declaração de variáveis:</span> </h3>
"var" tem escopo de função, enquanto "let" e "const" têm escopo de bloco. Além disso, "const" não permite reatribuição após a declaração.

<h3><span className="text-[#9D00FF] font-semibold">Hoisting:</span></h3> 
JavaScript eleva declarações de variáveis e funções para o topo do escopo, o que pode resultar em variáveis acessadas antes da inicialização retornando "undefined".

<h3><span className="text-[#9D00FF] font-semibold">Uso do this:</span></h3>
O valor de this depende do contexto de chamada da função e é estático em arrow functions.

<h3><span className="text-[#9D00FF] font-semibold"> Síncrono vs. Assíncrono:</span></h3> 
Métodos síncronos bloqueiam a execução até finalizarem, enquanto métodos assíncronos permitem que o código continue executando, aumentando eficiência e responsividade.


      </p>
    </div>
  );
}
//<span className="text-[#39FF14] font-semibold">Pleno</span>