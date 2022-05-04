function fase1() {
  answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  let choice

  while( choice != 1 && choice != 2) {
    choice = answer

    if (choice == 1) {
      location.href = "../dick-vigarista/dick-fase2.html"
    } else if (choice == 2) {
      alert("Game Over!O Dick Vigarista nunca comçaria sem uma armadilha")
      location.href = "../index.html"
    } else {
      prompt("Você deve escolher entre 1 ou 2!")
    }
  }
}