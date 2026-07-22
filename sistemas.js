const prompt = require("prompt-sync")();

let alunos = [];


function buscarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome === nome) {
            return alunos[i];
        }
    }

    return "Aluno não encontrado";
}

function calcularMedia(aluno) {
    if (aluno.notas.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    return soma / aluno.notas.length;
}


function situacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAluno(nome);

    if (aluno !== "Aluno não encontrado") {
        console.log("Aluno já cadastrado.");
        return;
    }

    alunos.push({
        nome: nome,
        notas: []
    });

    console.log("Aluno cadastrado com sucesso!");
}


function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    console.log("\nLista de alunos:");

    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome);
    }
}


function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover: ");

    let aluno = buscarAluno(nome);

    if (aluno === "Aluno não encontrado") {
        console.log("Aluno não encontrado.");
        return;
    }

    let posicao = alunos.indexOf(aluno);

    alunos.splice(posicao, 1);

    console.log("Aluno removido com sucesso!");
}


function lancarNota() {
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAluno(nome);

    if (aluno === "Aluno não encontrado") {
        console.log("Aluno não encontrado.");
        return;
    }

    let nota = Number(prompt("Digite a nota: "));

    if (nota < 0 || nota > 10) {
        console.log("Nota inválida.");
        return;
    }

    aluno.notas.push(nota);

    console.log("Nota lançada com sucesso!");
}


function verBoletim() {
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAluno(nome);

    if (aluno === "Aluno não encontrado") {
        console.log("Aluno não encontrado.");
        return;
    }

    let media = calcularMedia(aluno);

    let resultado = situacao(media);

    console.log("\n===== BOLETIM =====");
    console.log("Nome: " + aluno.nome);
    console.log("Notas: " + aluno.notas.join(", "));
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + resultado);
}


function totalDeAlunos() {
    console.log("Total de alunos cadastrados: " + alunos.length);
}


function mediaGeralDaTurma() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        soma += calcularMedia(alunos[i]);
    }

    let mediaGeral = soma / alunos.length;

    console.log("Média geral da turma: " + mediaGeral.toFixed(2));
}


function listarAprovados() {
    let texto = "";
    let encontrou = false;

    for (let i = 0; i < alunos.length; i++) {

        let media = calcularMedia(alunos[i]);

        let resultado = situacao(media);

        if (resultado === "Aprovado") {
            texto += alunos[i].nome + " - Média: " + media.toFixed(2) + "\n";
            encontrou = true;
        }
    }

    if (encontrou === false) {
        console.log("Ainda não há alunos aprovados.");
        return;
    }

    console.log(texto);
}


cadastrarAluno();
lancarNota();
verBoletim();
listarAlunos();
totalDeAlunos();
mediaGeralDaTurma();
listarAprovados();