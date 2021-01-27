function pesquisaLivros() {
  var resultadoPesquisa = $(".search-books-results"); 
  var botaoPesquisar = $("#start-search");
  var erro = $(".pesquisa-erro"); 

  botaoPesquisar.on("click", function(event) {
    gifCarregando.show();
    textoPesquisa.css("display", "none");
    palavraPesquisada.css("display", "none");
    event.preventDefault();
    resultadoPesquisa.text("");
    var tituloLivro = $("#input-search-books").val();
    
    searchBooks(tituloLivro).then(function(data) {
      const books = data.books;
      montaLivrosPesquisa(tituloLivro, books);
    })
  })
}