// Jogo Pedra, Papel e Tesoura
// O usuário joga contra o computador usando prompt e alert.

const opcoes = ["pedra", "papel", "tesoura"];

const escolhaUsuario = prompt(
  "Escolha uma opção: pedra, papel ou tesoura"
)?.toLowerCase().trim();

if (!opcoes.includes(escolhaUsuario)) {
  alert("Opção inválida. Digite apenas: pedra, papel ou tesoura.");
} else {
  const indiceComputador = Math.floor(Math.random() * opcoes.length);
  const escolhaComputador = opcoes[indiceComputador];

  let resultado;

  if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "Você venceu!";
  } else {
    resultado = "O computador venceu!";
  }

  alert(
    `Você escolheu: ${escolhaUsuario}\n` +
    `Computador escolheu: ${escolhaComputador}\n\n` +
    resultado
  );
}
