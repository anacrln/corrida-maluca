function fase2() {
  answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")


  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  }
    if (answer == 1) {
      alert("Game Over!Os participantes conseguiram atravessar a ponte por pouco")
      location.href = "../../index.html"
    } else if (answer == 2) {
      alert("Você segue deixando seus oponentes para trás!!")
      location.href = "../fase3/dick-fase3.html"
    } else {
      prompt("Você deve escolher 1 ou 2")
    }
}