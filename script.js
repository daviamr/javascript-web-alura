function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento === null || elemento.localName != 'audio') {
    console.log('Elemento inexistente ou não audível.');
  } else {
    elemento.play();
  }
}

//
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {

    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}

// Eventos do teclado, especificamente onkeydown e onkeyup;
// Funções para adicionar e remover classes, add e remove do classList;
// Objeto event, como declarar e acessar através do parâmetro de uma função;
// Estrutura condicional if/else juntos e whale;
// Operadores lógicos, ==, ===, !=, &&;
// Valores e tipos;
