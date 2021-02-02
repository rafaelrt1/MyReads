function trocaEstante (books, id, valueSelected) {
  if(valueSelected==1) {
    estante = "currentlyReading";
  }
  else if (valueSelected==2) {
    estante = "wantToRead";
  }
  else if (valueSelected==3) {
    estante = "read";
  }
  else if (valueSelected==4) {
    estante = "none";
  }
  
  updateBook({id}, estante).then(function() {
    esvaziaPagina();
    if (estante == "read"){
      prateleira = "Lidos"; 
    }
    else if (estante == "wantToRead"){
      prateleira = "Quero ler";
    }
    else if (estante == "currentlyReading"){
      prateleira = "Estou lendo";
    }
    else {
      prateleira = "none";
    }
    mostraAvisoMudanca();
    esvaziaPagina();
    carregaEstantes();
  })
}