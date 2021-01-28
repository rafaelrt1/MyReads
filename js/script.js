$(document).ready(function() {
  carregaEstantes();
});

let gifCarregando = $(".gif-loading");
let livrosPesquisa = $(".search-books");
let resultadoPesquisa = $(".search-books-results"); 
let livrosLendo = $(".livros-lendo");
let livrosLidos = $(".livros-lidos");
let queroLer = $(".livros-quero-ler");
let textoPesquisa = $(".texto-pesquisa");
let tituloLivro = $("#input-search-books").val();
let opcaoMover = $(".opcao-livro");
let botaoPesquisar = $("#start-search");
let botaoHamburger = $("#navbarTogglerDemo02");

function montaMeusLivros (books) {
  books.forEach(function(book){
    let id = book.id;
    if(book.imageLinks && book.imageLinks.smallThumbnail) {
      imagem = book.imageLinks.smallThumbnail;
    }
    else{
      imagem = "https://cima-afrique.org/cima/images/not-available.png";
    }
    let titulo = book.title;
    let autores = book.authors;
    let estante = book.shelf;
    let listaItem = document.createElement("div");
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
                <option class="opcao-mover" selected disabled>Mover para...</option>
                <option class="opcao-mover" value="1">Estou lendo</option>
                <option class="opcao-mover" value="2">Quero ler</option>
                <option class="opcao-mover" value="3">Lidos</option>
                <option class="opcao-mover" value="4">Remover livro</option>
              </select>
            </div>
          </div>
        </div>
      </div>       
    `;
    adicionaNaEstante(listaItem, estante, titulo);
  })
}

function montaLivrosPesquisa (tituloLivro, books) {
  books.forEach(function(book){
    let id = book.id;
    if(book.imageLinks && book.imageLinks.smallThumbnail) {
      imagem = book.imageLinks.smallThumbnail;
    }
    else{
      imagem = "https://cima-afrique.org/cima/images/not-available.png";
    } 
    let titulo = book.title;
    let autores = book.authors;
    let estante = book.shelf;
    let listaItem = document.createElement("div");
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
                <option class="opcao-mover" selected disabled>Mover para...</option>
                <option class="opcao-mover" value="1">Estou lendo</option>
                <option class="opcao-mover" value="2">Quero ler</option>
                <option class="opcao-mover" value="3">Lidos</option>
                <option class="opcao-mover" value="4">Remover livro</option>
              </select>
            </div>
          </div>
        </div>
      </div>       
    `;
    exibeResultadoPesquisa(tituloLivro, listaItem);  
  })
}

function adicionaNaEstante(listaItem, estante, titulo) { 
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
  livrosLendo.hide();
  livrosLidos.hide();
  queroLer.hide();;
  textoPesquisa.css("display", "inline-block").text(`Exibindo resultados para pesquisa por: ${tituloLivro}`);
  let resultadoPesquisa = $(".search-books-results"); 
  resultadoPesquisa.append(listaItem);
  resultadoPesquisa.css("display", "flex");
  gifCarregando.hide();
}

function atualizaPagina() {
  livrosLendo.text("");
  livrosLidos.text("");
  queroLer.text("");
}

function desceConteudo() {
  botaoHamburger.css("transition", "1s");
  livrosLendo.toggleClass("desce-conteudo");
  livrosLidos.toggleClass("desce-conteudo-lidos");
  queroLer.toggleClass("desce-conteudo");
  livrosPesquisa.toggleClass("desce-conteudo-pesquisa");
}

function sobeConteudo() {
  livrosLendo.toggleClass("desce-conteudo").addClass("transicao-padrao");
  livrosLidos.toggleClass("desce-conteudo-lidos").addClass("transicao-padrao");
  queroLer.toggleClass("desce-conteudo").addClass("transicao-padrao");
  livrosPesquisa.toggleClass("desce-conteudo-pesquisa").addClass("transicao-padrao");
}

function mostraAvisoMudanca() {
  var alertaMudanca = $(".modal-mudanca");
  var textoAlertaMudanca = $(".texto-alerta-mudanca");
  if (prateleira == "none"){
    textoAlertaMudanca.text(`O livro "${titulo}" foi removido`);
  }
  else {
    textoAlertaMudanca.text(`O livro "${titulo}" foi movido para a estante "${prateleira}"`);
  }
  alertaMudanca.fadeIn(1000);
  setTimeout(function () { 
    alertaMudanca.fadeOut(3000);  
  }, 2000);
  //carregaEstantes();
  //atualizaPagina();
  //livrosLendo.removeClass("desce-conteudo").addClass("transicao-padrao");
  ///livrosLidos.removeClass("desce-conteudo-lidos").addClass("transicao-padrao");
  //queroLer.removeClass("desce-conteudo").addClass("transicao-padrao");
  //livrosPesquisa.removeClass("desce-conteudo-pesquisa").addClass("transicao-padrao");
}