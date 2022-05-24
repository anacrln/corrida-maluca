function fase2() {
  let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")



  while (answer != 1 && answer != 2) {
    answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
  }


  if (answer == 1) {
    alert("A quadrilha acabou indo para muito longe e perdeu a corrida")
    location.href = "../../index.html"
  } else if (answer == 2) {
    alert("Boa escolha.\nA Quadrilha da Morte segue na corrida")
    location.href = "../fase3/quadrilha-fase3.html"
  } else {
    prompt("Você deve escolher entre 1 ou 2!")
  }
}