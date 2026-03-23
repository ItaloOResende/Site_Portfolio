// ==========================================
// TESTE DE CONEXÃO
// ==========================================
console.log("Script.js carregado com sucesso!");

// ==========================================
// MÓDULO: SUPORTE TÉCNICO (CARROSSEL SIMPLES)
// ==========================================
let fotoSuporteAtual = 0;

function mudarFoto(n) {
    // Busca as fotos apenas dentro da seção de suporte
    const fotos = document.querySelectorAll('#suporte .foto-fundo');
    
    if (fotos.length === 0) return;

    // Tira a visibilidade da foto atual
    fotos[fotoSuporteAtual].classList.remove('ativa');

    // Calcula o próximo índice (com loop)
    fotoSuporteAtual = (fotoSuporteAtual + n + fotos.length) % fotos.length;

    // Mostra a nova foto
    fotos[fotoSuporteAtual].classList.add('ativa');
    console.log("Suporte: Mostrando foto " + fotoSuporteAtual);
}

// ==========================================
// MÓDULO SISTEMAS (TUDO EM UM LUGAR SÓ)
// ==========================================

// 1. O BANCO DE DADOS (Aqui você coloca TODAS as fotos de todos os sistemas)
const bancoSistemas = {
    'academia': [
        { img: 'imagens/sistemas/gerenciador de academia/cadastro de alunos.png', txt: 'Imagem 1.' },
        { img: 'imagens/sistemas/gerenciador de academia/cadastro de turmas.png', txt: 'Imagem 2.' },
        { img: 'imagens/sistemas/academia_treinos.png', txt: 'Academia: Fichas de treinos personalizadas.' }
        // Para colocar mais fotos da academia, é só adicionar aqui em cima
    ],
    'chamados': [
        { img: 'imagens/sistemas/chamados1.png', txt: 'Chamados: Tela de abertura de tickets.' }
    ],
    'estoque': [
        { img: 'imagens/sistemas/estoque1.png', txt: 'Estoque: Controle de hardware e peças.' }
    ]
};

let projetoAtivo = 'academia'; // Começa na academia
let indexSistemas = 0;         // Começa na primeira foto

// 2. FUNÇÃO QUE AS SETAS CHAMAM
function mudarFotoSistemas(n) {
    // Pega a lista do projeto que está selecionado agora
    const listaAtual = bancoSistemas[projetoAtivo];

    // Calcula o próximo índice (frente ou trás)
    indexSistemas = (indexSistemas + n + listaAtual.length) % listaAtual.length;

    // Atualiza a tela
    atualizarDisplay();
}

// 3. FUNÇÃO PARA OS BOTÕES (FILTRAR)
function filtrarSistema(id, elemento) {
    projetoAtivo = id; // Muda o projeto (ex: de 'academia' para 'chamados')
    indexSistemas = 0; // Volta para a primeira foto do novo projeto

    // Deixa o botão clicado azul
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('ativo'));
    elemento.classList.add('ativo');

    atualizarDisplay();
}

// 4. FUNÇÃO QUE FAZ A TROCA REAL NA TELA
function atualizarDisplay() {
    const dados = bancoSistemas[projetoAtivo][indexSistemas];

    const imgElement = document.getElementById('img-display-sistema');
    const txtElement = document.getElementById('desc-sistema-display');

    if (imgElement && txtElement) {
        imgElement.src = dados.img;
        txtElement.innerText = dados.txt;
    }
}