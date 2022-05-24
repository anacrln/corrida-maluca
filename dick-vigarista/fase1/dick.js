function fase1() {
    let answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")

    
    
    while (answer != 1 && answer != 2) {
      answer = prompt("Digite qual a sua escolha:\n 1 ou 2?")
    }
    
    
    if (answer == 1) {
      alert("Boa,você largou em primeiro")
      location.href = "../fase2/dick-fase2.html"
    } else if (answer == 2) {
      alert("Game Over!O Dick Vigarista nunca comçaria sem uma armadilha")
      location.href = "../../index.html"
    } else {
      prompt("Você deve escolher entre 1 ou 2!")
    }
  }
