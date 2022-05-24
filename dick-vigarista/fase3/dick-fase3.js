function fase3() {
  answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }

    if (answer == 1) {
      alert("Você se perdeu no caminho e perdeu a corrida")
      location.href ="../../index.html"
    } else if (answer == 2) {
      alert("Essa não,o pombo apareceu e você foi atrás dele!\nGame Over!")
      location.href = "../../index.html"
    } else {
      prompt("Você precisa escolher entre 1 e 2!")
    }
}