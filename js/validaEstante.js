function validaEstante() {
    if (this.document.childNodes[1].childNodes[1].nextElementSibling.children[1].childNodes[3].childElementCount == 0) {
        let estanteAtual = $(document.body.childNodes[3].childNodes[3].className);
        estanteAtual.prevObject[0].all[32].innerHTML = "<h3>Você não tem livros nesta estante</h3>";
    }
}