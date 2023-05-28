// DEIXA A CAPA DO PAINEL A DIREITA INVISIVEL
const capaPainelConversa = document.getElementById('painelMensagensConversa');
const painelConversa = document.getElementById('painelMensagensCapa');

capaPainelConversa.style.display = 'none';
painelConversa.style.display = 'block';

// SALVAR OS DADOS NO COMPUTADOR DO USUARIO
// Dados que você deseja salvar
const dados = {
    nome: "Exemplo",
    idade: 25
  };
  
  // Converter para formato de texto (JSON)
  const dadosJSON = JSON.stringify(dados);
  
  // Salvar no localStorage
  localStorage.setItem('dadosSalvos', dadosJSON);

// FIM

// QUANDO CLICA EM UM CARD DA CONVERSA

// metodo para trocar a visibilidade das telas ***teste***
var i = true;
function inverterTelas() {
  if (i) {
    i = false;
    capaPainelConversa.style.display = 'block';
    painelConversa.style.display = 'none';
  } else {
    i = true;
    capaPainelConversa.style.display = 'none';
    painelConversa.style.display = 'block';
  }
}

// pega o elemento que sera clicado pelo id
const cardConversa = document.getElementById('cardConversa')

cardConversa.addEventListener('click', function() {
  
    inverterTelas();

});

// QUANDO DA ENTER NO INPUT (PARA MANDAR MENSAGEM)
const inputTexto = document.getElementById('input1');

function EnviarMensagem() {
    const texto = document.getElementById('input1').value;
    const novaDiv = document.createElement('div');
    novaDiv.className = 'balaoRecebimento';

    const novoSpan = document.createElement('span');
    novoSpan.textContent = texto;
    novaDiv.appendChild(novoSpan);

    const corpo = document.getElementById('conteudo');

    corpo.appendChild(novaDiv);

    alert("foi");
}

inputTexto.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla Enter (código 13)
    if (event.keyCode === 13) {
      // Chama o método que você deseja executar
      EnviarMensagem();
    }
  });