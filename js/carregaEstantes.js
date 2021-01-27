function carregaEstantes() {
  gifCarregando.toggle();
  
  //mostra meus livros
  getMyBooks().then(function(data) {
    const books = data.books;
    montaMeusLivros(books);
    let opcaoMover = $(".opcao-livro");
    
    opcaoMover.on("change", function() {
      id = this.id;
      var valueSelected = this.value;
      trocaEstante(books, id, valueSelected);
    })
  })
}