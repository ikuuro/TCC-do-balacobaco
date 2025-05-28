export const questions = [
  {
    id: 1,
    level: 'junior',
    question: 'Qual tag HTML é usada para criar um rodapé?',
    options: ['<bottom>', '<footer>', '<end>', '<section>'],
    correctAnswer: 1,
    explanation: 'A tag <footer> é usada para definir um rodapé para um documento ou seção.',
    demonstration: {
      code: `<footer class="bg-gray-800 text-white p-4">
  <p>Este é um exemplo de rodapé</p>
</footer>`,
      description: 'O rodapé geralmente contém informações como direitos autorais, links de contato e navegação secundária.'
    }
  },
  {
    id: 2,
    level: 'junior',
    question: 'Como centralizar um elemento usando Flexbox?',
    options: [
      'align: center;',
      'display: flex; justify-content: center; align-items: center;',
      'position: center;',
      'text-align: center;'
    ],
    correctAnswer: 1,
    explanation: 'Usando display: flex com justify-content e align-items definidos como center, podemos centralizar um elemento tanto horizontal quanto verticalmente.',
    demonstration: {
      code: `<div class="flex justify-center items-center h-40 bg-blue-100">
  <div class="bg-blue-500 p-4 text-white">Elemento Centralizado</div>
</div>`,
      description: 'O Flexbox é uma ferramenta poderosa para layout que facilita o alinhamento de elementos.'
    }
  },
  {
    id: 3,
    level: 'junior',
    question: 'Como adicionar uma cor de fundo em CSS?',
    options: [
      'color: blue;',
      'background-color: blue;',
      'bg: blue;',
      'background: blue;'
    ],
    correctAnswer: 1,
    explanation: 'A propriedade background-color é usada para definir a cor de fundo de um elemento.',
    demonstration: {
      code: `.elemento {
  background-color: blue;
  /* Também pode usar valores hexadecimais */
  background-color: #0000FF;
  /* Ou RGB/RGBA */
  background-color: rgb(0, 0, 255);
}`,
      description: 'Existem várias formas de especificar cores em CSS, incluindo nomes de cores, valores hexadecimais e RGB/RGBA.'
    }
  },
  {
    id: 4,
    level: 'junior',
    question: 'Qual tag HTML é usada para criar um título principal em uma página?',
    options: ['<title>', '<h1>', '<header>', '<head>'],
    correctAnswer: 1,
    explanation: 'A tag <h1> é usada para definir o título principal de uma página, sendo o elemento de maior importância em termos de hierarquia de cabeçalhos.',
    demonstration: {
      code: `<h1>Bem-vindo ao meu site!</h1>`,
      description: 'O <h1> é geralmente usado para o título principal de uma página ou seção.'
    }
  },
  {
    id: 5,
    level: 'junior',
    question: 'Como criar um link clicável em HTML?',
    options: [
      '<a href="url">Texto</a>',
      '<link src="url">Texto</link>',
      '<url="url">Texto</url>',
      '<href="url">Texto</href>'
    ],
    correctAnswer: 0,
    explanation: 'A tag <a> com o atributo href é usada para criar links clicáveis em HTML.',
    demonstration: {
      code: `<a href="https://www.example.com">Visite o Example</a>`,
      description: 'O atributo href define o destino do link, e o texto entre as tags <a> é o que será exibido ao usuário.'
    }
  },
  {
    id: 6,
    level: 'junior',
    question: 'Qual tag HTML é usada para adicionar uma imagem a uma página?',
    options: ['<img>', '<image>', '<picture>', '<src>'],
    correctAnswer: 0,
    explanation: 'A tag <img> é usada para incorporar imagens em uma página HTML. O atributo src define o caminho da imagem, e o atributo alt fornece um texto alternativo.',
    demonstration: {
      code: `<img src="https://via.placeholder.com/150" alt="Imagem de exemplo">`,
      description: 'O atributo src especifica o caminho da imagem, enquanto o atributo alt descreve a imagem para acessibilidade.'
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