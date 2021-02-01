function pesquisaLivros(tituloLivro) {
  searchBooks(tituloLivro).then(function(data) {
    erroPesquisa.hide();
    const books = data.books;
    if(books.error) {
      let erroPesquisa = $(".pesquisa-erro");
      erroPesquisa.text("Desculpe. Não conseguimos encontrar nenhum livro pela palavra pesquisada.");
      erroPesquisa.show();
      gifCarregando.hide();
    }
    else {
      montaLivrosPesquisa(tituloLivro, books);
    }
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