function fase2() {
  answer2 = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  let choice2

  while (choice2 != 1 && choice2 != 2) {
    answer2

    choice2 = answer2

    if (choice2 == 1) {
      alert("Game Over!Os participantes conseguiram atravessar a ponte por pouco")
      location.href = "../index.html"
    } else if (choice2 == 2) {
      location.href = "../dick-vigarista/dick-fase3.html"
    } else {
      prompt("Você deve escolher 1 ou 2")
    }
  }
}