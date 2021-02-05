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
      esvaziaPagina();
      montaMeusLivros(books);
      validaEstante();
      gifCarregando.hide();
    
      $("body").on("change", ".opcao-livro", function(event){
        event.preventDefault();
        id = this.id;
        let valueSelected = this.value;
        titulo = this.parentNode.children[0].innerHTML;
        trocaEstante(books, id, valueSelected);
      })
  })

  $("body").on("click", "#start-search", function (event) {
    //resultadoPesquisa.hide();
    botaoHamburger.toggleClass("show");
    sobeConteudo();
    esvaziaPagina();
    gifCarregando.show();
    textoPesquisa.css("display", "none");
    event.preventDefault();
    let tituloLivro = $("#input-search-books").val();
    if (tituloLivro == "") {
      textoPesquisa.text("Nada foi digitado no campo de pesquisa. Digite algo para pesquisar").show();;
      gifCarregando.hide();
    }
    else
      pesquisaLivros(tituloLivro);
  })
}