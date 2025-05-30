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