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
return "Aluno não encontrado"; 
    }
}
console.log(buscarAluno("Maranhão"))