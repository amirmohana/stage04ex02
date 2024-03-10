// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

let students = [
  {
  nome: "Joao",
  notaUm: 50,
  notaDois: 70
 },
 {
  nome: "Ana",
  notaUm: 80,
  notaDois: 90
 },
 {
  nome: "Joao kleber",
  notaUm: 30,
  notaDois: 76
 },
 {
  nome: "Thor",
  notaUm: 78,
  notaDois: 82
 },
]

// Parabens, nome " voce foi aprovado a no concurso !!

// nao foi dessa vez, nome ! tente novamente !


function calcularMediaAluno(students){
  for (let i = 0; i < students.length; i++) {
    let media = (students[i].notaUm + students[i].notaDois) / 2
    
    if(media >= 70){
      alert("A média do(a)" + students[i].nome + " é: " + media +" --------- Parabens, voce foi aprovado(a) no concurso !!");
    }
    else{
      alert("A média do(a)" + students[i].nome + " é: " + media +" --------- Infelizmente, voce foi Reprovado(a) no concurso !!");
    }
  }

}

calcularMediaAluno(students)
