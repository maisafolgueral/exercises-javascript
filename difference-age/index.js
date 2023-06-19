let nameOlder = prompt("Digite o nome da pessoa mais velha?");
let ageOlder = prompt("Digite a idade da pessoa mais velha?");

let nameYounger = prompt("Digite o nome da pessoa mais nova?");
let ageYounger = prompt("Digite a idade da pessoa mais nova?");

const ageDifference = ageOlder - ageYounger;

alert(
  "---------- Resultado ----------\n" +
    "Pessoa mais velha: \n" +
    "     Nome: " +
    nameOlder +
    "\n     Idade: " +
    ageOlder +
    "\n\nPessoa mais nova: \n" +
    "     Nome: " +
    nameYounger +
    "\n     Idade: " +
    ageYounger +
    "\n\nA diferença de idade é " +
    ageDifference +
    "."
);
