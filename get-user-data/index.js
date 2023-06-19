alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Informe seu nome:");
let age = prompt("Informe sua idade:");
let ageConfirmation = confirm("Sua idade é " + age + " anos");

alert(
    "---------- Resumo dos dados ---------- \n" +
  "Nome: " +
    name +
    "\n" +
    "Idade: " +
    age +
    "\n" +
    "Idade confirmada: " +
    ageConfirmation
);
