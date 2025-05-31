
export function SeniorIntro() {
  return (
    <div className="max-w-2xl mx-auto mb-10 p-8 bg-black bg-opacity-40 rounded-xl border border-[#9D00FF] shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 neon-text">Bem-vindo ao Desafio Sênior!</h2>
      <p className="text-lg text-gray-200 mb-4">
      Este desafio foi elaborado para avaliar sua familiaridade com recursos avançados do <span className="font-semibold">JavaScript</span> Ele aborda conceitos fundamentais da execução assíncrona, gerenciamento de escopo, controle de contexto de funções, e técnicas funcionais como currying. As perguntas exigem conhecimento prático e teórico de como a linguagem funciona "por baixo dos panos", como o Event Loop e closures. Boa sorte, Dev <span className="text-[#39FF14] font-semibold">Sênior</span>.
      </p>
      <p className="text-gray-300">
      <h3><span className="text-[#39FF14] font-semibold">Promise.all():</span></h3>
       Aguarda todas as promessas serem resolvidas ou falha se uma for rejeitada. Ideal para tarefas assíncronas paralelas.

<h3><span className="text-[#39FF14] font-semibold">Call, Apply e Bind:</span></h3>

call e apply executam funções imediatamente com controle de contexto.

apply usa array de argumentos.

bind retorna uma nova função com contexto fixado.

<h3><span className="text-[#39FF14] font-semibold">Event Loop:</span></h3>
 Gerencia tarefas assíncronas, executando microtasks (como Promises) antes de macrotasks (como setTimeout).

<h3><span className="text-[#39FF14] font-semibold">Closures:</span></h3>
 Permitem que funções internas acessem variáveis do escopo externo mesmo após este ter sido finalizado.

<h3><span className="text-[#39FF14] font-semibold">Hoisting com var, let e const:</span></h3>

Todas são hoisted.

var é inicializada como undefined.

let e const entram em temporal dead zone até sua declaração.

<h3><span className="text-[#39FF14] font-semibold">Currying:</span></h3>
 Técnica funcional que transforma funções com múltiplos argumentos em chamadas encadeadas, cada uma recebendo um argumento por vez.
      </p>
    </div>
  );
}
//<span className="text-[#9D00FF] font-semibold">Sênior</span>