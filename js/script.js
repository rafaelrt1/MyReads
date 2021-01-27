let gifCarregando = $(".gif-loading");
let resultadoPesquisa = $(".search-books-results"); 
let livrosLendo = $(".livros-lendo");
let livrosLidos = $(".livros-lidos");
let queroLer = $(".livros-quero-ler");
let textoPesquisa = $(".texto-pesquisa");
let palavraPesquisada = $(".pesquisa-palavra");
let tituloLivro = $("#input-search-books").val();
let opcaoMover = $(".opcao-livro");

$(document).ready(function() {
  carregaEstantes();
  pesquisaLivros();
});

function montaMeusLivros (books) {

  books.forEach(function(book){
    var id = book.id;
    var imagem = book.imageLinks.smallThumbnail;
    var titulo = book.title;
    var autores = book.authors;
    var estante = book.shelf;
    var listaItem = document.createElement("div");
    listaItem.classList.add("estilo-geral-card");
    listaItem.innerHTML = 
    `
      <div class="row estilo-card">
        <div class="col-sm-12">
          <div class="card card-espaco">
            <img id="imagem-card" src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title titulo-card">${titulo}</h5>
              <p class="card-text texto-card">${autores}</p>
              <select id="${id}" class="opcao-livro form-select">
                <option class="opcao-mover" selected>Mover para...</option>
                <option class="opcao-mover" value="1">Estou lendo</option>
                <option class="opcao-mover" value="2">Quero ler</option>
                <option class="opcao-mover" value="3">Lidos</option>
                <option class="opcao-mover" value="4">Remover</option>
              </select>
            </div>
          </div>
        </div>
      </div>       
    `;
    adicionaNaEstante(listaItem, estante);
  })
}

function montaLivrosPesquisa (tituloLivro, books) {

  books.forEach(function(book){
    var id = book.id;
    var imagem = book.imageLinks.smallThumbnail;
    var titulo = book.title;
    var autores = book.authors;
    var estante = book.shelf;
    var listaItem = document.createElement("div");
    listaItem.classList.add("estilo-geral-card");
    listaItem.innerHTML = 
    `
      <div class="row estilo-card">
        <div class="col-sm-12">
          <div class="card card-espaco">
            <img id="imagem-card" src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title titulo-card">${titulo}</h5>
              <p class="card-text texto-card">${autores}</p>
              <select id="${id}" class="opcao-livro form-select">
                <option class="opcao-mover" selected>Mover para...</option>
                <option class="opcao-mover" value="1">Estou lendo</option>
                <option class="opcao-mover" value="2">Quero ler</option>
                <option class="opcao-mover" value="3">Lidos</option>
                <option class="opcao-mover" value="4">Remover</option>
              </select>
            </div>
          </div>
        </div>
      </div>       
    `;
    exibeResultadoPesquisa(tituloLivro, listaItem);  
  })
}

function adicionaNaEstante(listaItem, estante) { 
  if(estante=="currentlyReading") {
    livrosLendo.append(listaItem);
    gifCarregando.toggle();
  }

  else if(estante=="wantToRead") {
    queroLer.append(listaItem);
    gifCarregando.toggle();
  }
  
  else if (estante=="read") {
    livrosLidos.append(listaItem);
    gifCarregando.toggle();
  }
}

function exibeResultadoPesquisa(tituloLivro, listaItem) {
  palavraPesquisada.text(tituloLivro);
  livrosLendo.hide();
  livrosLidos.hide();
  queroLer.hide();;
  textoPesquisa.css("display", "inline-block");
  palavraPesquisada.css("display", "inline-block");
  var resultadoPesquisa = $(".search-books-results"); 
  resultadoPesquisa.append(listaItem);
  resultadoPesquisa.css("display", "flex");
  gifCarregando.hide();
}