const readline = require('readline-sync');

let totalEstudantes = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;
let continuar = true;

while (continuar) {
    const nome = readline.question("Nome do estudante: ");
    const nota1 = Number(readline.question("Primeira nota do estudante: "));
    const nota2 = Number(readline.question("Segunda nota do estudante: "));

    const media = (nota1 + nota2) / 2;
    totalEstudantes++;

    if (media >= 7) {
        console.log("Aprovado");
        aprovados++;
    } else if (media >= 5) {
        console.log("Recuperação");
        recuperacao++;
    } else {
        console.log("Reprovado");
        reprovados++;
    }

    const resposta = readline.question("Deseja cadastrar outro estudante? (s/n): ");
    if (resposta.toLowerCase() !== 's') {
        continuar = false;
    }
}

console.log(`Total de estudantes cadastrados: ${totalEstudantes}`);
console.log(`Quantidade de aprovados: ${aprovados}`);
console.log(`Quantidade em recuperação: ${recuperacao}`);
console.log(`Quantidade de reprovados: ${reprovados}`);