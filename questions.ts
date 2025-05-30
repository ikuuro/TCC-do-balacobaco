export const questions = [
  {
    id: 1,
    level: 'junior',
    question: 'Qual palavra-chave é usada para declarar uma variável em JavaScript?',
    options: ['varia', 'let', 'define', 'function'],
    correctAnswer: 1,
    explanation: 'Em JavaScript, let é usado para declarar variáveis com escopo de bloco (desde o ES6). var também existe, mas tem escopo de função. define e varia não são palavras-chave válidas.',
    demonstration: {
      code: `let nome = "João";
console.log(nome); // Saída: João`,
      description: ''
    }
  },
  {
    id: 2,
    level: 'junior',
    question: 'Qual é o resultado da expressão 2 + "2" em JavaScript?',
    options: [
      '4',
      '22',
      'NaN',
      'undefined'
    ],
    correctAnswer: 1,
    explanation: 'Quando se soma um número com uma string em JavaScript, ocorre concatenação (não soma numérica). O número 2 é convertido para string, e o resultado é "22".',
    demonstration: {
      code: `let resultado = 2 + "2";
console.log(resultado); // Saída: "22"`,
      description: ''
    }
  },
  {
    id: 3,
    level: 'junior',
    question: 'Qual destes é um operador de comparação em JavaScript?',
    options: [
      '===',
      '+=',
      '&&',
      '++'
    ],
    correctAnswer: 0,
    explanation: 'O operador === compara valor e tipo. Já += é operador de atribuição, && é lógico E, e ++ é incremento.',
    demonstration: {
      code: `console.log(5 === "5"); // false (tipos diferentes)
console.log(5 === 5);   // true
`,
      description: ''
    }
  },
  {
    id: 4,
    level: 'junior',
    question: 'Qual é a maneira correta de definir uma função em JavaScript?',
    options: ['function = minhaFuncao() {}', 'fun minhaFuncao() {}', 'function minhaFuncao() {}', 'create function minhaFuncao() {}'],
    correctAnswer: 2,
    explanation: 'A sintaxe correta para declarar uma função em JavaScript é com a palavra-chave function, seguida do nome da função e parênteses.',
    demonstration: {
      code: `function saudacao() {
  console.log("Olá, mundo!");
}
saudacao(); // Saída: Olá, mundo!`,
      description: ''
    }
  },
  {
    id: 5,
    level: 'junior',
    question: 'Qual operador é utilizado para somar e atribuir o valor ao mesmo tempo em JavaScript?',
    options: [
      '==',
      '+=',
      '=>',
      '++='
    ],
    correctAnswer: 0,
    explanation: 'O operador += é um operador de atribuição composto. Ele soma o valor à variável e armazena o resultado nela mesma, equivalente a x = x + valor.',
    demonstration: {
      code: `let total = 10;
total += 5; // Equivale a total = total + 5
console.log(total); // Saída: 15`,
      description: ''
    }
  },
  {
    id: 6,
    level: 'junior',
    question: 'Qual estrutura é usada para executar diferentes blocos de código com base em condições?',
    options: ['loop', 'switch', 'define', 'array'],
    correctAnswer: 1,
    explanation: 'A estrutura switch permite comparar um valor com diferentes casos e executar o bloco correspondente.',
    demonstration: {
      code: `let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Outro dia");
}
// Saída: Terça
`,
      description: ''
    }
  },
  {
    id: 7,
    level: 'pleno',
    question: 'Qual método JavaScript é usado para adicionar um elemento ao final de um array?',
    options: ['append()', 'push()', 'add()', 'insert()'],
    correctAnswer: 1,
    explanation: 'O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.',
    demonstration: {
      code: `const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']`,
      description: 'O método push é uma forma eficiente de adicionar elementos a um array.'
    }
  },
  
  {
    id: 8,
    level: 'pleno',
    question: 'Como implementar um evento de clique em JavaScript?',
    options: [
      'element.click = function() {}',
      'element.addEventListener("click", function() {})',
      'element.onClickEvent = function() {}',
      'element.addClick(function() {})'
    ],
    correctAnswer: 1,
    explanation: 'O método addEventListener é a forma moderna e recomendada de adicionar eventos a elementos.',
    demonstration: {
      code: `const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Botão clicado!');
});

// Também pode usar arrow function
button.addEventListener('click', () => {
  console.log('Botão clicado!');
});`,
      description: 'addEventListener permite adicionar múltiplos listeners ao mesmo evento e oferece mais controle sobre o comportamento do evento.'
    }
  },
  {
    id: 9,
    level: 'pleno',
    question: 'Qual é a diferença entre declarar uma variável com var, let e const no JavaScript?',
    options: [
      'Não há diferença, todas são equivalentes.',
      'var tem escopo de função, let e const têm escopo de bloco.',
      'let e const podem ser redeclaradas no mesmo escopo.',
      'const permite reatribuição de valores.'
    ],
    correctAnswer: 1,
    explanation: 'A principal diferença está no escopo e na possibilidade de reatribuição. "var" tem escopo de função e pode ser redeclarada, enquanto "let" e "const" têm escopo de bloco. "const" não permite reatribuição após a inicialização.',
    demonstration: {
      code: `function testScope() {
    if (true) {
      var varVariable = 'var: escopo de função';
      let letVariable = 'let: escopo de bloco';
      const constVariable = 'const: escopo de bloco';
    }
    console.log(varVariable); // Funciona
    // console.log(letVariable); // Erro: letVariable não está definida
    // console.log(constVariable); // Erro: constVariable não está definida
  }
  
  testScope();`,
      description: 'Demonstra como "var" tem escopo de função, enquanto "let" e "const" têm escopo de bloco.'
    }
  },
  {
    id: 10,
    level: 'pleno',
    question: 'O que é o conceito de "hoisting" no JavaScript e como ele afeta variáveis e funções?',
    options: [
      'Hoisting move todas as declarações para o final do código.',
      'Hoisting move apenas funções para o topo do escopo.',
      'Hoisting move declarações de variáveis e funções para o topo do escopo.',
      'Hoisting não existe no JavaScript.'
    ],
    correctAnswer: 2,
    explanation: 'Hoisting é o comportamento do JavaScript de mover declarações de variáveis e funções para o topo do escopo durante a fase de compilação. No entanto, apenas as declarações são movidas, não as inicializações.',
    demonstration: {
      code: `console.log(myVar); // undefined (hoisting da declaração, mas não da inicialização)
  console.log(myFunction()); // "Função chamada!" (hoisting da função)
  
  var myVar = 'Variável inicializada';
  function myFunction() {
    return 'Função chamada!';
  }`,
      description: 'Demonstra como o hoisting afeta variáveis (declaradas com "var") e funções no JavaScript.'
    }
  },
  {  
    id: 11,
    level: 'pleno',
    question: 'O que acontece quando usamos "this" em diferentes contextos no JavaScript?',
    options: [
      '"this" sempre se refere ao objeto global.',
      '"this" sempre se refere ao objeto que chamou a função.',
      '"this" depende de como a função é chamada.',
      '"this" é indefinido em funções normais.'
    ],
    correctAnswer: 2,
    explanation: '"this" no JavaScript depende do contexto de execução. Em funções normais, ele pode variar dependendo de como a função é chamada. Em funções arrow, ele é léxico e não muda.',
    demonstration: {
      code: `function normalFunction() {
    console.log(this);
  }
  
  const arrowFunction = () => {
    console.log(this);
  };
  
  const obj = {
    method: normalFunction,
  };
  
  normalFunction(); // No navegador: objeto global (window)
  arrowFunction(); // No navegador: objeto global (window)
  obj.method(); // Objeto "obj"`,
      description: 'Demonstra como "this" varia em funções normais e arrow functions dependendo do contexto.'
    }
  },
  {
    id: 12,
    level: 'pleno',
    question: 'Qual é a diferença entre métodos síncronos e assíncronos no JavaScript?',
    options: [
      'Métodos síncronos bloqueiam a execução, enquanto métodos assíncronos não bloqueiam.',
      'Métodos assíncronos são mais rápidos que métodos síncronos.',
      'Métodos síncronos só funcionam com promessas.',
      'Não há diferença entre métodos síncronos e assíncronos.'
    ],
    correctAnswer: 0,
    explanation: 'Métodos síncronos bloqueiam a execução do código até que sejam concluídos, enquanto métodos assíncronos permitem que outras operações continuem enquanto aguardam a conclusão.',
    demonstration: {
      code: `console.log('Início');
  
  setTimeout(() => {
    console.log('Assíncrono: Timeout concluído');
  }, 1000);
  
  console.log('Fim'); // Executado antes do timeout concluir`,
      description: 'Demonstra como métodos assíncronos permitem que o código continue executando enquanto aguardam a conclusão.'
    }
  },
  {
    id: 13,
    level: 'senior',
    question: 'O que é e para que serve o método Promise.all()?',
    options: [
      'Executa promessas em sequência',
      'Aguarda todas as promessas serem resolvidas ou uma ser rejeitada',
      'Cancela todas as promessas pendentes',
      'Converte callbacks em promessas'
    ],
    correctAnswer: 1,
    explanation: 'Promise.all() recebe um array de promessas e retorna uma nova promessa que resolve quando todas as promessas do array são resolvidas ou rejeita assim que uma delas é rejeitada.',
    demonstration: {
      code: `const promises = [
  fetch('https://api.example.com/data1'),
  fetch('https://api.example.com/data2'),
  fetch('https://api.example.com/data3')
];

Promise.all(promises)
  .then(results => {
    console.log('Todos os dados foram carregados:', results);
  })
  .catch(error => {
    console.error('Uma das requisições falhou:', error);
  });`,
      description: 'Útil quando precisamos executar múltiplas operações assíncronas em paralelo e aguardar todas serem concluídas.'
    }
  },
  {
    id: 14,
    level: 'senior',
    question: 'Qual é a diferença entre "call", "apply" e "bind" no JavaScript?',
    options: [
      '"call" e "apply" executam a função imediatamente, enquanto "bind" retorna uma nova função.',
      '"call" e "bind" são equivalentes, mas "apply" é diferente.',
      '"apply" e "bind" executam a função imediatamente, enquanto "call" retorna uma nova função.',
      'Não há diferença entre eles.'
    ],
    correctAnswer: 0,
    explanation: '"call" e "apply" executam a função imediatamente, mas "apply" aceita argumentos como um array. "bind" retorna uma nova função com o contexto definido, sem executá-la imediatamente.',
    demonstration: {
      code: `function greet(greeting, name) {
    console.log(\`\${greeting}, \${name}!\`);
  }
  
  greet.call(null, 'Olá', 'João'); // Executa imediatamente
  greet.apply(null, ['Olá', 'João']); // Executa imediatamente com argumentos em array
  const boundGreet = greet.bind(null, 'Olá'); // Retorna uma nova função
  boundGreet('João');`,
      description: 'Demonstra como "call", "apply" e "bind" funcionam para definir o contexto de "this" e passar argumentos.'
    }
  },
  {
    id: 15,
    level: 'senior',
    question: 'O que é o Event Loop no JavaScript e como ele funciona?',
    options: [
      'É uma estrutura que executa funções síncronas e assíncronas em sequência.',
      'É um mecanismo que gerencia a execução de callbacks e tarefas assíncronas.',
      'É um método para criar loops em eventos do DOM.',
      'É uma API para manipular eventos em JavaScript.'
    ],
    correctAnswer: 1,
    explanation: 'O Event Loop é responsável por gerenciar a execução de tarefas assíncronas, como callbacks, Promises e timers, garantindo que o JavaScript continue sendo single-threaded.',
    demonstration: {
      code: `console.log('Início');
  
  setTimeout(() => {
    console.log('Timeout concluído');
  }, 0);
  
  Promise.resolve().then(() => {
    console.log('Promise resolvida');
  });
  
  console.log('Fim');`,
      description: 'Demonstra como o Event Loop prioriza a execução de microtasks (como Promises) antes de macrotasks (como setTimeout).'
    }
  },
  {
    id: 16,
    level: 'senior',
    question: 'Como funciona o conceito de "closure" no JavaScript?',
    options: [
      'Closure é quando uma função é executada imediatamente após ser definida.',
      'Closure é quando uma função "lembra" do escopo em que foi criada.',
      'Closure é uma função que não pode acessar variáveis externas.',
      'Closure é um método para criar classes em JavaScript.'
    ],
    correctAnswer: 1,
    explanation: 'Closure ocorre quando uma função "lembra" do escopo em que foi criada, mesmo após esse escopo ter sido encerrado.',
    demonstration: {
      code: `function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2`,
      description: 'Demonstra como closures permitem que uma função acesse variáveis do escopo em que foi criada.'
    }
  },
  {
    id: 17,
    level: 'senior',
    question: 'Qual é a diferença entre "var", "let" e "const" em termos de hoisting?',
    options: [
      '"var" é hoisted com inicialização, enquanto "let" e "const" não são hoisted.',
      'Todas são hoisted, mas "let" e "const" ficam em um "temporal dead zone".',
      '"let" e "const" não são hoisted, enquanto "var" é.',
      'Não há diferença em termos de hoisting entre "var", "let" e "const".'
    ],
    correctAnswer: 1,
    explanation: '"var" é hoisted e inicializado como undefined, enquanto "let" e "const" são hoisted, mas não inicializados, ficando em um "temporal dead zone" até serem declarados.',
    demonstration: {
      code: `console.log(a); // undefined (hoisting de "var")
  // console.log(b); // ReferenceError (temporal dead zone)
  // console.log(c); // ReferenceError (temporal dead zone)
  
  var a = 1;
  let b = 2;
  const c = 3;`,
      description: 'Demonstra como "var", "let" e "const" se comportam em relação ao hoisting.'
    }
  },
  {
    id: 18,
    level: 'senior',
    question: 'O que é o conceito de "currying" em JavaScript e como ele pode ser aplicado?',
    options: [
      'Currying é uma técnica para transformar uma função com múltiplos argumentos em uma sequência de funções que recebem um argumento cada.',
      'Currying é uma técnica para executar funções assíncronas em sequência.',
      'Currying é um método para combinar várias funções em uma única função.',
      'Currying é uma forma de criar closures em JavaScript.'
    ],
    correctAnswer: 0,
    explanation: 'Currying é uma técnica funcional que transforma uma função com múltiplos argumentos em uma sequência de funções unárias, permitindo maior reutilização e composição de funções.',
    demonstration: {
      code: `function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // Exemplo de uso
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  console.log(curriedAdd(1)(2)(3)); // 6`,
      description: 'Demonstra como o currying pode ser usado para transformar funções e facilitar a reutilização de argumentos.'
    }
  }
  
  
  

] as const;