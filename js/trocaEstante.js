function trocaEstante (books, id, valueSelected) {
  livrosLidos.text("");
  livrosLendo.text("");
  queroLer.text("");
  
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
    atualizaPagina();
    carregaEstantes();

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
  })
}