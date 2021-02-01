function carregaEstantes() {
  gifCarregando.show();

  botaoHamburger.on("show.bs.collapse", function() {
    desceConteudo();
  })
  botaoHamburger.on("hide.bs.collapse", function(){
    sobeConteudo();
  })
  
  getMyBooks().then(function(data) {
    const books = data.books;
    if(livrosLendo.text()=='""') {
      livrosLendo.text("Você não tem nenhum livro nesta estante.")
      gifCarregando.hide();
    }
    else if (livrosLidos.text()==" ") {
      livrosLidos.text("Você não tem nenhum livro nesta estante.")
      gifCarregando.hide();
    }
    else if (queroLer.text()==" ") {
      queroLer.text("Você não tem nenhum livro nesta estante.")
      gifCarregando.hide();
    }
      montaMeusLivros(books);
      gifCarregando.hide();
    
      $("body").on("change", ".opcao-livro", function(event){
        event.preventDefault();
        id = this.id;
        let valueSelected = this.value;
        titulo = this.parentNode.children[0].innerHTML;
        console.log(titulo);
        trocaEstante(books, id, valueSelected);
      })
  })

  $("body").on("click", "#start-search", function (event) {
    botaoHamburger.toggleClass("show");
    sobeConteudo();
    atualizaPagina();
    gifCarregando.show();
    textoPesquisa.css("display", "none");
    event.preventDefault();
    resultadoPesquisa.text("");
    let tituloLivro = $("#input-search-books").val();
    pesquisaLivros(tituloLivro);
  })
}