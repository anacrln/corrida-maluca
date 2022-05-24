function fase3() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("Essa não,vocês não ajudaram e ainda caíram numa armadilha do Dick Vigarista.\nGame Over!")
    location.href = "../../index.html"
  } else if (answer == 2) {
    alert("Vocês ajudaram a Penelope e ainda deu tempo de ficarem em primeiro lugar.\nParabéns!!")
    location.href = "../../index.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}