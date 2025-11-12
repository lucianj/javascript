const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio: function (){
    listaEstudantes = this.estudantes;
    let somaProgresso = 0;
    let numAlunos = 0;

    for (estudante of listaEstudantes){
        //console.log(estudante);
        let status = (estudante.progresso > 70) ? "Aprovado" : "Em andamento";
        console.log(`Estudante ${estudante.nome} | Progresso ${estudante.progresso}% | Situação: ${status} `);
        somaProgresso += estudante.progresso;
        numAlunos++;
    }
    console.log();
    console.log(`Total de estudantes: ${numAlunos}`);
    console.log(`Média geral da turma: ${somaProgresso/numAlunos}%`);

  }
};

curso.gerarRelatorio();
