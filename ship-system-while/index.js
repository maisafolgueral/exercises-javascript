let warpCount = 0;
let chosenOption = "";

let spaceship = prompt("Digite o nome da nave");

chosenOption = prompt(
  "Deseja entrar em dobra espacial?\n" +
    "1. Sim\n" +
    "2. Não\n\n" +
    "(Digite o número da opção desejada)"
);

while (chosenOption === "1") {
  warpCount += 1;
  chosenOption = prompt(
    "Deseja realizar a próxima dobra?\n" +
      "1- Sim\n" +
      "2- Não" +
      "\n\n(Digite o número da opção desejada)"
  );
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount);
