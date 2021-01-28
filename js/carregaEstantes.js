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
    montaMeusLivros(books);
    gifCarregando.hide();
    
    let opcaoMover = $(".opcao-livro");
    opcaoMover.on("change", function() {
      id = this.id;
      console.log($(this));
      titulo = this.parentNode.children[0].innerHTML;
      console.log(titulo);
      let valueSelected = this.value;
      trocaEstante(books, id, valueSelected, titulo);
    })
  })

  botaoPesquisar.on("click", function(event) {
    atualizaPagina();
    gifCarregando.show();
    textoPesquisa.css("display", "none");
    event.preventDefault();
    resultadoPesquisa.text("");
    let tituloLivro = $("#input-search-books").val();
    pesquisaLivros(tituloLivro);
  })
}