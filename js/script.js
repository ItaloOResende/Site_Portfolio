// ==========================================
// TESTE DE CONEXÃO
// ==========================================
console.log("Script.js carregado com sucesso!");

// ==========================================
// MÓDULO: SUPORTE TÉCNICO (CARROSSEL SIMPLES)
// ==========================================
let fotoSuporteAtual = 0;

function mudarFoto(n) {
    const fotos = document.querySelectorAll('#suporte .foto-fundo');
    if (fotos.length === 0) return;

    fotos[fotoSuporteAtual].classList.remove('ativa');
    fotoSuporteAtual = (fotoSuporteAtual + n + fotos.length) % fotos.length;
    fotos[fotoSuporteAtual].classList.add('ativa');
}

// ==========================================
// MÓDULO SISTEMAS (TUDO EM UM LUGAR SÓ)
// ==========================================

// 1. O BANCO DE DADOS
// DICA: Para que a borda azul apareça em cada frase, use o formato de lista [ ]
const bancoSistemas = {
    //Aba do Gerenciador de academia
    'academia': [
        { 
            img: 'imagens/sistemas/gerenciador de academia/cadastro de alunos.png', 
            topicos: [
                'Cadastro e atualização de dados de alunos',
                'Pesquise por qualquer campo de texto da tela.',
                'Filtros rápidos por dia, professor e modalidade.',
                'Visualização do tamanho da turma e vagas disponíveis.'
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de academia/cadastro de turmas.png', 
            topicos: [
                'Cadastro de novas modalidades e professores.',
                'Criação e atualização de turmas.',
                'Visualização de todas as turmas cadastradas'
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de academia/folha de pagamento.png', 
            topicos: [
                'Cadastro de mensalidades recebidas.',
                'Cadastro de despesas pagas.',
                'Cálculo de lucro recebido.'
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de academia/fila de espera.png', 
            topicos: [
                'Visualização da lista de espera de alunos para as vagas.',
                'Processamento imediato que retira o aluno da espera e atualiza o total da turma.'
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de academia/ex alunos.png', 
            topicos: [
                'Visualização da lista de ex alunos.',
                'Processamento imediato que recadastra o ex aluno na lista de alunos ativos.'
            ] 
        }
    ],
    //Aba do Gerenciador de clínica médica
    'clinica': [
        { 
            img: 'imagens/sistemas/gerenciador de clinica/marcacao_de_consultas.png', 
            topicos: [
                'Cadastro e atualização de dados de pacientes.',
                'Marcação de novas consultas.',
                'Visualização de horários preenchidos.',
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de clinica/relatorio_medico.png', 
            topicos: [
                'Visualização da agenda de consultas.',
                'Campo para descrição da consulta.',
                'Pesquisa por pacientes, data ou relatório médico.',
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de clinica/cadastro_de_usuarios.png', 
            topicos: [
                'Cadastro de diferentes tipos de usuários.',
                'Privilégios diferentes por tipo de usuário.',
                'Visualização dos usuários cadastrados no sistema.'
            ] 
        },
        { 
            img: 'imagens/sistemas/gerenciador de clinica/fechamento_de_caixa.png', 
            topicos: [
                'Preenchimento de lucros e gastos.',
                'Visualização de lucros e gastos diários, semanais e anuais.',
            ] 
        }
    ],
    //Aba para o sistema de chamados
    'chamados': [
        { 
            img: 'imagens/sistemas/sistema de chamados/painel_de_chamados.png', 
            topicos: [
                'Visualização de todos os chamados feitos.',
                'Filtrar chamados por id, empresa, técnico, data, status ou palavras chaves.',
                'Selecionar chamados para ver mais detalhes'
            ] 
        },
        { 
            img: 'imagens/sistemas/sistema de chamados/abrirEatualizar_chamados.png', 
            topicos: [
                'Abrir e editar chamados.',
                'Atribuir chamados ao técnico responsável.',
                'Definir prioridade e status.',
                'Detalhar problema relatado.',
                'Descrever solução técnica.',
            ] 
        },
        { 
            img: 'imagens/sistemas/sistema de chamados/clientesETecnicos_cadastrados.png', 
            topicos: [
                'Visualização dos clientes e técnicos cadastrados.',
                'Exclusão de clientes e técnicos.',
            ] 
        },
        { 
            img: 'imagens/sistemas/sistema de chamados/cadastro_de_clientesEtecnicos.png', 
            topicos: [
                'Cadastro de clientes e técnicos com informações essenciais.',
            ] 
        },
        { 
            img: 'imagens/sistemas/sistema de chamados/editar_clienteEtecnico.png', 
            topicos: [
                'Edição de dados de clientes e técnicos.'
            ] 
        }
    ],
};

let projetoAtivo = 'academia'; 
let indexSistemas = 0;         

// 2. FUNÇÃO QUE AS SETAS CHAMAM
function mudarFotoSistemas(n) {
    const listaAtual = bancoSistemas[projetoAtivo];
    indexSistemas = (indexSistemas + n + listaAtual.length) % listaAtual.length;
    atualizarDisplay();
}

// 3. FUNÇÃO PARA OS BOTÕES (FILTRAR)
function filtrarSistema(id, elemento) {
    projetoAtivo = id; 
    indexSistemas = 0; 

    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('ativo'));
    elemento.classList.add('ativo');

    atualizarDisplay();
}

// 4. FUNÇÃO QUE FAZ A TROCA REAL NA TELA (CONSERTADA)
function atualizarDisplay() {
    const dados = bancoSistemas[projetoAtivo][indexSistemas];

    const imgElement = document.getElementById('img-display-sistema');
    const txtContainer = document.getElementById('desc-sistema-display');

    if (imgElement && txtContainer) {
        // Atualiza a imagem
        imgElement.src = dados.img;

        // Limpa o que tinha antes e cria um <p> com borda azul para cada tópico
        txtContainer.innerHTML = dados.topicos.map(texto => {
            return `<p class="topico-item">${texto}</p>`;
        }).join('');
    }
}