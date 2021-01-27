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
  
  updateBook({id}, estante).then(function() {
    atualizaPagina();
    carregaEstantes();
  })
}