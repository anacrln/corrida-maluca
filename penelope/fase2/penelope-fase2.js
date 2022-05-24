function fase2() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("Foi uma boa ideia!!\nA bruxa acabou se distraindo e ficou para trás.")
    location.href = "../fase3/penelope-fase3.html"
  } else if (answer == 2) {
    alert("Essa não,a bruxa te enfeitiçou e você ficou para trás!\nGame Over.")
    location.href = "../../index.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}