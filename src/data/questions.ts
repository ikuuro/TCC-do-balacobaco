export const questions = [
  {
    id: 1,
    level: 'junior',
    question: ' Como você declara uma variável em JavaScript?',
    options: ['v myVar = 10;', 'let myVar = 10;', 'int myVar = 10;', 'variable myVar = 10;'],
    correctAnswer: 1,
    explanation: 'A palavra-chave let é usada para declarar variáveis com escopo de bloco em JavaScript. Também é possível usar var ou const, dependendo do contexto.',
    demonstration: {
      code: `let myVar = 10;
console.log(myVar); // Saída: 10`,
      description: '  '
    }
  },
  {
    id: 2,
    level: 'junior',
    question: 'Qual destas opções verifica corretamente se duas variáveis são iguais em valor e tipo? ',
    options: [
      'x = y',
      'x == y',
      'x === y',
      'x.equals(y)'
    ],
    correctAnswer: 2,
    explanation: 'O operador === verifica valor e tipo. Já == verifica apenas o valor, podendo fazer coerção de tipo. ',
    demonstration: {
      code: `let a = "5";
let b = 5;

console.log(a == b);   // true (valores iguais, tipos diferentes)
console.log(a === b);  // false (valor igual, mas tipos diferentes)
`,
      description: 'O operador === é recomendado para evitar problemas de coerção de tipo, garantindo que tanto o valor quanto o tipo sejam iguais.'
    }
  },
  {
    id: 3,
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
    id: 4,
    level: 'junior',
    question: `O que será impresso no console?

    console.log(typeof null);`,
    options: [
      '"null"',
      '"undefined"',
      '"object"',
      '"string" '
    ],
    correctAnswer: 2,
    explanation: 'Por uma peculiaridade antiga do JavaScript, typeof null retorna "object", embora null não seja realmente um objeto  .',
    demonstration: {
      code: `console.log(typeof null); // Saída: "object"`,
      description: 'O typeof é um operador que retorna o tipo de uma variável ou expressão. No caso de null, ele retorna "object", o que pode ser confuso para muitos desenvolvedores.' 
    }
  },
  {

    id: 4,
    level: 'junior',
    question: 'Qual método é usado para transformar uma string em número inteiro?',
    options: ['parseStr()', 'parseInt()', 'stringToInt()', 'convertNumber()'],
    correctAnswer: 1,
    explanation: 'parseInt() converte uma string em um número inteiro. Se a string não começar com número válido, retorna NaN.',
    demonstration: {
      code: `let str = "42";
let num = parseInt(str);
console.log(num); // Saída: 42
`,
      description: 'O método parseInt() é útil para converter strings que representam números inteiros em valores numéricos, permitindo operações matemáticas e comparações.'
    }
  },
  {
    id: 5,
    level: 'junior',
    question: 'O que NaN representa em JavaScript?',
    options: [
      'Um número negativo',
      'Um número aleatório',
      'Um erro de sintaxe',
      'Um valor que não é um número'
    ],
    correctAnswer: 3,
    explanation: 'NaN significa "Not-a-Number". Ele é retornado quando uma operação matemática falha (ex: parse de uma string inválida para número).',
    demonstration: {
      code: `let resultado = parseInt("abc");
console.log(resultado);       // NaN
console.log(isNaN(resultado)); // true`,
      description: 'O NaN é um valor especial em JavaScript que indica que uma operação matemática não resultou em um número válido. É importante verificar se um valor é NaN usando a função isNaN(), pois NaN não é igual a si mesmo (NaN !== NaN).'
    }
  },
  {
    id: 6,
    level: 'junior',
    question: `O que este código imprime?
    console.log("5" + 3);`,
    options: ['null', '0', '"undefined"', 'Erro'],
    correctAnswer: 0,
    explanation: 'Se uma variável é declarada mas não inicializada, seu valor padrão é undefined.',
    demonstration: {
      code: `let x;
console.log(x); // Saída: undefined`,
      description: 'Quando uma variável é declarada mas não inicializada, seu valor padrão é undefined. Isso significa que ela existe, mas ainda não foi atribuída a nenhum valor específico.'
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
=======
    id: 5,

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
    id: 6,
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
  }
] as const;