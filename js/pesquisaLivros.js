function pesquisaLivros(tituloLivro) {
  searchBooks(tituloLivro).then(function(data) {
    const books = data.books;
    montaLivrosPesquisa(tituloLivro, books);
    
    let opcaoMover = $(".opcao-livro");
    opcaoMover.on("change", function(event) {
      event.preventDefault();
      id = this.id;
      let valueSelected = this.value;
      titulo = this.parentNode.children[0].innerHTML;
      console.log(titulo);
      trocaEstante(books, id, valueSelected);
    })
  })
}