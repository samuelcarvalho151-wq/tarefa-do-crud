//////////////////////////////////PARTE 1 — Funções de apoio////////////////////////////////////////////
let alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [6, 8, 7] },
  { nome: "Carla", notas: [9, 10, 9] },
  { nome: "Diego", notas: [5, 7, 6] }
];

function buscarAluno(aluno){
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === aluno.toLowerCase()) {
    return alunos[i];
}
    }
    return "Aluno não encontrado"; 
}
console.log(buscarAluno("Bruno"))

//////////////////////////////PARTE 2 — Ações do Cadastro////////////////////////////////////////////////////

const prompt = require("prompt-sync")();

let aluno = [];

function buscarAluno(nome) {
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].nome === nome) {
            return aluno[i];
        }
    }

    return undefined;
}

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");

    if (buscarAluno(nome) !== undefined) {
        console.log("Aluno já cadastrado!");
        return;
    }

    aluno.push({
        nome: nome,
        notas: []
    });

    console.log("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    if (aluno.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let texto = "";

    for (let i = 0; i < aluno.length; i++) {
        texto += aluno[i].nome + "\n";
    }

    console.log(texto);
}

function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover:");

    let aluno = buscarAluno(nome);

    if (aluno === undefined) {
        console.log("Aluno não encontrado.");
        return;
    }

    let posicao = alunos.indexOf(aluno);

    alunos.splice(posicao, 1);

    console.log("Aluno removido com sucesso!");
}
cadastrarAluno();
removerAluno();
listarAlunos();

////////////////////////////////////////PARTE 3 — Ações das Notas/////////////////////////////////////////////