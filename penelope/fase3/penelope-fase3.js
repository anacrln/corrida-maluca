function fase3() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("Péssima ideia!\nOs irmãos rocha conseguiram te passar e você ficou em 2º lugar!")
    location.href = "../../index.html" 
  } else if (answer == 2) {
    alert("Parabéns,você ficou em 1º lugar!.")
    location.href = "../../index.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}