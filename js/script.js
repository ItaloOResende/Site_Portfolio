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
        linkGithub: 'https://github.com/ItaloOResende/GerenciadorDeAcademia',
        fotos: [
            { 
                img: 'imagens/sistemas/gerenciador de academia/cadastro de alunos.png', 
                topicos: ['Cadastro e atualização de dados de alunos','Pesquise por qualquer campo de texto da tela.','Filtros rápidos por dia, professor e modalidade.','Visualização do tamanho da turma e vagas disponíveis.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de academia/cadastro de turmas.png', 
                topicos: ['Cadastro de novas modalidades e professores.','Criação e atualização de turmas.','Visualização de todas as turmas cadastradas'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de academia/folha de pagamento.png', 
                topicos: ['Cadastro de mensalidades recebidas.','Cadastro de despesas pagas.','Cálculo de lucro recebido.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de academia/fila de espera.png', 
                topicos: ['Visualização da lista de espera de alunos para as vagas.','Processamento imediato que retira o aluno da espera e atualiza o total da turma.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de academia/ex alunos.png', 
                topicos: ['Visualização da lista de ex alunos.','Processamento imediato que recadastra o ex aluno na lista de alunos ativos.'] 
            }
        ],
    },
    'clinica': {
        resumoGeral: 'Gerenciador hospitalar focado em agendamento de consultas, prontuário médico e controle de fluxo de caixa.',
        linkGithub: 'https://github.com/ItaloOResende/GerenciadorDeClinica',
        fotos: [
            { 
                img: 'imagens/sistemas/gerenciador de clinica/marcacao_de_consultas.png', 
                topicos: ['Cadastro e atualização de dados de pacientes.','Marcação de novas consultas.','Visualização de horários preenchidos.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de clinica/relatorio_medico.png', 
                topicos: ['Visualização da agenda de consultas.','Campo para descrição da consulta.','Pesquisa por pacientes, data ou relatório médico.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de clinica/cadastro_de_usuarios.png', 
                topicos: ['Cadastro de diferentes tipos de usuários.','Privilégios diferentes por tipo de usuário.','Visualização dos usuários cadastrados no sistema.'] 
            },
            { 
                img: 'imagens/sistemas/gerenciador de clinica/fechamento_de_caixa.png', 
                topicos: ['Preenchimento de lucros e gastos.','Visualização de lucros e gastos diários, semanais e anuais.'] 
            }
        ]
    },
    'chamados': {
        resumoGeral: 'Plataforma de Help Desk para abertura de tickets, atribuição de técnicos e monitoramento de soluções.',
        linkGithub: 'https://github.com/ItaloOResende/SistemaDeChamados',
        fotos: [
            { 
                img: 'imagens/sistemas/sistema de chamados/painel_de_chamados.png', 
                topicos: ['Visualização de todos os chamados feitos.','Filtrar por id, empresa, técnico, data ou status.','Selecionar chamados para ver mais detalhes'] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/abrirEatualizar_chamados.png', 
                topicos: ['Abrir e editar chamados.','Atribuir técnicos e definir prioridades.','Detalhar problema e descrever solução técnica.'] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/clientesETecnicos_cadastrados.png', 
                topicos: ['Visualização dos clientes e técnicos cadastrados.','Exclusão de clientes e técnicos.'] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/cadastro_de_clientesEtecnicos.png', 
                topicos: ['Cadastro de clientes e técnicos.','Verificação de campos obrigatórios preenchidos.'] 
            },
            { 
                img: 'imagens/sistemas/sistema de chamados/editar_clienteEtecnico.png', 
                topicos: ['Editar dados de clientes e técnicos.','Verificação de campos obrigatórios preenchidos.'] 
            }
        ]
    },
    'estoque': {
        resumoGeral: 'Sistema de controle de inventário, monitoramento de hardware e gestão de equipamentos de TI.',
        linkGithub: 'https://github.com/ItaloOResende/Cadastro_de_equipamentos',
        fotos: [
            { 
                img: 'imagens/sistemas/cadastro de equipamentos/equipamentos_cadastrados.png', 
                topicos: ['Visualização dos equipamentos cadastrados.','Filtros de busca por equipamentos.','Quantidade total de equipamentos.','Botões para mudar a situação do equipamento.','Geração de termo de empréstimo.'] 
            },
            { 
                img: 'imagens/sistemas/cadastro de equipamentos/cadastrar_equipamentos.png', 
                topicos: ['Cadastro de novos equipamentos com informações essenciais.'] 
            },
            {
                img: 'imagens/sistemas/cadastro de equipamentos/editar_equipamentos.png', 
                topicos: ['Editar informações de equipamentos cadastrados'] 
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

    // ATUALIZA O RESUMO (Texto cinza em cima das fotos)
    const resumoElemento = document.getElementById('resumo-sistema');
    if (resumoElemento) {
        // Pega o resumoGeral do bancoSistemas baseado no id (academia, clinica, etc)
        resumoElemento.innerText = bancoSistemas[id].resumoGeral;
    }

    // ATUALIZA O LINK DO GITHUB
    const btnGithub = document.getElementById('btn-github-sistema');
    if (btnGithub) {
        btnGithub.href = bancoSistemas[id].linkGithub;
    }

    // Gerencia a cor dos botões
    document.querySelectorAll('#sistemas .btn-filtro').forEach(btn => btn.classList.remove('ativo'));
    elemento.classList.add('ativo');

    atualizarDisplay(); // Atualiza foto e tópicos
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

// 1. VARIÁVEIS DE CONTROLE
let gameAtivo = 'Memorias';
let indexGames = 0;

// 2. BANCO DE DADOS
const bancoGames = {
    'Memorias': {
        resumoGeral: 'Um jogo de mistério e exploração focado em narrativa.',
        // Sem linkGithub ou paginaDoProjeto aqui
        topicosFixos: [
            'Mecânicas de puzzle integradas à narrativa.',
            'Cenários desenvolvidos com técnicas de pintura digital.'
        ],
        midias: [
            { tipo: 'video', url: 'https://www.youtube.com/embed/5YAg_8iYk2w' }
        ]
    },
    'MyCuteDestroyerOfWorlds': {
        resumoGeral: 'Simulador de criação de um pet interdimensional.',
        paginaDoProjeto: 'https://supernaturalstardust.itch.io/my-cute-destroyer-of-worlds',
        topicosFixos: [
                'Inspirado na estética PSX (PlayStation 1) com gráficos low-poly.',
                'Impeça que a criatura se comunique com a zona primordial de vida e morte.',
                'Explore cenários em primeira pessoa para procurar itens.',
                'Desenvolvido em Unity e Blender para a Virtual Pet Jam.'
        ],
        midias: [
            { tipo: 'foto', url: 'imagens/jogos/my_cute_destroyer_of_worlds/pet.png' },
            { tipo: 'foto', url: 'imagens/jogos/my_cute_destroyer_of_worlds/alien.png' },
            { tipo: 'foto', url: 'imagens/jogos/my_cute_destroyer_of_worlds/banheiro.png' },
            { tipo: 'foto', url: 'imagens/jogos/my_cute_destroyer_of_worlds/supermercado.png' },
            { tipo: 'foto', url: 'imagens/jogos/my_cute_destroyer_of_worlds/caixa.png' }
        ]
    }
};

// 3. FUNÇÕES DE DISPLAY E CONTROLE
function atualizarDisplayGames() {
    const jogo = bancoGames[gameAtivo];
    const dados = jogo.midias[indexGames];
    const container = document.getElementById('container-midia-game');
    const txtContainer = document.getElementById('desc-game-display');
    const setas = document.querySelectorAll('#games .seta-ctrl');

    if (container && txtContainer) {
        // Lógica das Setas
        setas.forEach(seta => {
            seta.style.display = jogo.midias.length <= 1 ? 'none' : 'flex';
        });

        // Troca de Mídia
        if (dados.tipo === 'video') {
            container.innerHTML = `<iframe width="100%" height="100%" src="${dados.url}?autoplay=0&rel=0" frameborder="0" allowfullscreen></iframe>`;
        } else {
            container.innerHTML = `<img src="${dados.url}" id="img-display-game" style="height: 60vh; object-fit: contain;">`;
        }

        // MONTA OS TÓPICOS
        const htmlTopicos = jogo.topicosFixos.map(t => `<p class="topico-item">${t}</p>`).join('');
        
        // LÓGICA DO BOTÃO (SÓ APARECE SE TIVER LINK)
        const linkFinal = jogo.paginaDoProjeto || jogo.linkGithub;
        let htmlBotao = ""; // Começa vazio

        if (linkFinal) {
            const textoBotao = jogo.paginaDoProjeto ? 'Jogar no Itch.io' : 'Ver no GitHub';
            htmlBotao = `
                <div style="margin-top: 25px;">
                    <a href="${linkFinal}" target="_blank" class="btn-projeto" style="display: inline-block;">
                        ${textoBotao}
                    </a>
                </div>`;
        }

        // Coloca no HTML: Tópicos + Botão (que pode estar vazio)
        txtContainer.innerHTML = htmlTopicos + htmlBotao;
    }
}

function mudarFotoGames(n) {
    const listaMidias = bancoGames[gameAtivo].midias;
    indexGames = (indexGames + n + listaMidias.length) % listaMidias.length;
    atualizarDisplayGames();
}

function filtrarGames(id, elemento) {
    gameAtivo = id;
    indexGames = 0;

    const resumoElemento = document.getElementById('resumo-game');
    if (resumoElemento) {
        resumoElemento.innerText = bancoGames[id].resumoGeral;
    }

    const btnLink = document.getElementById('btn-github-game');
    if (btnLink) {
        const linkDestino = bancoGames[id].paginaDoProjeto || bancoGames[id].linkGithub;
        
        if (linkDestino) {
            btnLink.href = linkDestino;
            btnLink.style.display = "inline-block"; // <--- ISSO GARANTE QUE ELE APAREÇA
            btnLink.innerText = bancoGames[id].paginaDoProjeto ? 'Jogar no Itch.io' : 'Ver no GitHub';
        } else {
            btnLink.style.display = "none"; // Esconde se não tiver link
        }
    }

    document.querySelectorAll('#games .btn-filtro').forEach(btn => btn.classList.remove('ativo'));
    elemento.classList.add('ativo');

    atualizarDisplayGames();
}

// 4. INICIALIZAÇÃO (SEMPRE NO FINAL DO ARQUIVO)
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa Sistemas
    if (typeof atualizarDisplay === "function") {
        const btnGitSistema = document.getElementById('btn-github-sistema');
        if (btnGitSistema) btnGitSistema.href = bancoSistemas[projetoAtivo].linkGithub;
        atualizarDisplay();
    }

    // Inicializa Games
    const btnGitGame = document.getElementById('btn-github-game');
if (btnGitGame) {
    // Busca o link correto logo de cara
    btnGitGame.href = bancoGames[gameAtivo].paginaDoProjeto || bancoGames[gameAtivo].linkGithub;
}
    
    const resumoGame = document.getElementById('resumo-game');
    if (resumoGame) resumoGame.innerText = bancoGames[gameAtivo].resumoGeral;

    atualizarDisplayGames(); 
});