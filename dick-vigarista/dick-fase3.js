function fase3() {
  answer3 = prompt("Digite qual a sua escolha:\n 1 ou 2?")

  let choice3

  while (choice3 != 1 && choice3 != 2) {
    answer3

    choice3 = answer3

    if (choice3 == 1) {
      alert("Você se perdeu no caminho e perdeu a corrida")
      location.href ="../index.html"
    } else if (choice3 == 2) {
      alert("O capanga até preparou a armadilha, mas você viu o pombo e se distraiu.Acabou perdendo a corrida")
      location.href = "../index.html"
    } else {
      prompt("Você precisa escolher entre 1 e 2!")
    }
  }
}