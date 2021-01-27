function trocaEstante (books, id, valueSelected) {

    if(valueSelected==1) {
      estante = "estouLendoIDs";
    }
    else if (valueSelected==2) {
      estante = "queroLerIDs";
    }
    else if (valueSelected==3) {
      estante = "lidosIDs";
    }
    
    console.log(estante);
    console.log(id);
    
    updateBook(id, estante).then(function() {
      
      console.log("fiz update");
      carregaEstantes();
    })
  }