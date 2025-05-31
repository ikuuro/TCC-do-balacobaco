// function levelselect() {
//   window.location.href = '../index.html';

// console.log ("ta sendo apertado");
// };


//         document.querySelector('.logo-link').addEventListener('click', function (e) {
//             e.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });

//         window.addEventListener('scroll', function () {
//             if (window.scrollY > 50) {
//                 document.body.classList.add('scrolled');
//             } else {
//                 document.body.classList.remove('scrolled');
//             }
//         });

  const handleStart = () => {
    console.log("ta sendo apertado");
  };






// /*Beleza! Quando você usa window.location.href dentro de um evento onclick, e o caminho está sendo repetido na URL, provavelmente você está concatenando o caminho atual com o novo, e isso gera algo tipo:

// bash
// Copiar
// Editar
// /caminho/caminho/caminho
// Exemplo do problema comum:
// javascript
// Copiar
// Editar
// button.onclick = function() {
//   window.location.href = window.location.href + '/novo-caminho';
// };
// Se a URL já for /novo-caminho, você vai ter:

// bash
// Copiar
// Editar
// /novo-caminho/novo-caminho/novo-caminho
// Como resolver?
// Use um caminho absoluto ou relativo correto, não concatenando a URL inteira.

// Por exemplo, se quiser ir para /novo-caminho a partir da raiz do seu site, faça assim:

// javascript
// Copiar
// Editar
// button.onclick = function() {
//   window.location.href = '/novo-caminho';
// };
// Ou, se quiser navegar para um caminho relativo, baseado na URL atual:
// Use window.location.pathname e construa corretamente, ou só defina o caminho que deseja.

// Outra dica
// Se o botão for um link (<a href="...">), e o clique estiver gerando esse comportamento, você pode evitar comportamento duplo com:

// javascript
// Copiar
// Editar
// button.onclick = function(event) {
//   event.preventDefault(); // previne o clique padrão no link
//   window.location.href = '/novo-caminho';
// };*/
