function fase1() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("Você continua na corrida,mas muitos corredores te ultrapassaram!")
    location.href = "../fase2/penelope-fase2.html"
  } else if (answer == 2) {
    alert("Essa não,além de estragar seu cabelo, seu carro também parou de funcionar!\n Game Over :(")
    location.href = "../../index.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}