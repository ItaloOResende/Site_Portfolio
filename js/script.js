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
// MÓDULO SISTEMAS (ESTRUTURA COMPLETA)
// ==========================================

const bancoSistemas = {
    'academia': {
        resumoGeral: 'Software completo para gestão de matrículas, treinos e financeiro de academias de médio porte.',
        fotos: [
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
        ]
    },
    'clinica': {
        resumoGeral: 'Gerenciador hospitalar focado em agendamento de consultas, prontuário médico e controle de fluxo de caixa.',
        fotos: [
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
        ]
    },
    'chamados': {
        resumoGeral: 'Plataforma de Help Desk para abertura de tickets, atribuição de técnicos e monitoramento de soluções.',
        fotos: [
            { 
                img: 'imagens/sistemas/sistema de chamados/painel_de_chamados.png', 
                topicos: [
                    'Visualização de todos os chamados feitos.',
                    'Filtrar por id, empresa, técnico, data ou status.',
                    'Selecionar chamados para ver mais detalhes'
                ] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/abrirEatualizar_chamados.png', 
                topicos: [
                    'Abrir e editar chamados.',
                    'Atribuir técnicos e definir prioridades.',
                    'Detalhar problema e descrever solução técnica.'
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
                    'Cadastro de clientes e técnicos.',
                    'Verificação de campos obrigatórios preenchidos.',
                ] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/editar_clienteEtecnico.png', 
                topicos: [
                    'Editar dados de clientes e técnicos.',
                    'Verificação de campos obrigatórios preenchidos.',
                ] 
            }
        ]
    },
    'estoque': {
        resumoGeral: 'Sistema de controle de inventário, monitoramento de hardware e gestão de equipamentos de TI.',
        fotos: [
            { 
                img: 'imagens/sistemas/estoque1.png', 
                topicos: [
                    'Controle de entrada e saída de equipamentos.',
                    'Histórico de movimentação de peças.'
                ] 
            }
        ]
    }
};

let projetoAtivo = 'academia'; 
let indexSistemas = 0;         

// 2. FUNÇÃO QUE AS SETAS CHAMAM
function mudarFotoSistemas(n) {
    const listaFotos = bancoSistemas[projetoAtivo].fotos;
    indexSistemas = (indexSistemas + n + listaFotos.length) % listaFotos.length;
    atualizarDisplay();
}

// 3. FUNÇÃO PARA OS BOTÕES (FILTRAR)
function filtrarSistema(id, elemento) {
    projetoAtivo = id; 
    indexSistemas = 0; 

    // Atualiza o texto do resumo (o texto cinza em cima das fotos)
    const resumoElemento = document.getElementById('resumo-sistema');
    if (resumoElemento) {
        resumoElemento.innerText = bancoSistemas[id].resumoGeral;
    }

    // Estilo dos botões
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('ativo'));
    elemento.classList.add('ativo');

    atualizarDisplay();
}

// 4. FUNÇÃO QUE ATUALIZA A TELA
function atualizarDisplay() {
    // Busca os dados dentro da nova estrutura .fotos
    const dados = bancoSistemas[projetoAtivo].fotos[indexSistemas];

    const imgElement = document.getElementById('img-display-sistema');
    const txtContainer = document.getElementById('desc-sistema-display');

    if (imgElement && txtContainer) {
        // Atualiza a imagem
        imgElement.src = dados.img;

        // Cria os tópicos com borda azul
        txtContainer.innerHTML = dados.topicos.map(texto => {
            return `<p class="topico-item">${texto}</p>`;
        }).join('');
    }
}

// 5. INICIALIZAÇÃO (Faz o site carregar os dados da Academia ao abrir)
document.addEventListener("DOMContentLoaded", () => {
    atualizarDisplay();
});