function fase1() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("Vocês manteram a calma e nem precisaram fazer nada.\nO Mutley errou o alvo e acertou o carro do Dick Vigarista")
    location.href = "../fase2/quadrilha-fase2.html"
  } else if (answer == 2) {
    alert("Essa não,a granada explodiu no carro e foi o fim da corrida para a quadrilha")
    location.href =  "../../index.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}