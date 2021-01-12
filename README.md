# Avaliação

Esse é o template inicial para o projeto final que compreende o módulo 1 do curso de Formação em Oracle Cloud Commerce. O objetivo desse template é poupar tempo com um exemplo estático de HTML e CSS, porém sem nenhuma funcionalidade que é necessária para finalizar o projeto. Seu trabalho aqui é adicionar interatividade ao projeto refatorando o código estático disponível nesse template.
## Começar

Você pode começar abrindo o arquivo `index.html` no navegador de internet e editor de texto preferido.

## Servidor Backend

Para simplificar o processo de desenvolvimento, um backend já foi criado para esse app. O arquivo [`api.js`](api.js) contém os métodos necessários para fazer as operações necessárias no backend:

* [`getAllBooks`](#getAllBooks)

### `getAllBooks`

> Pesquisa todos os livros na API de backend e retorna os dados da request.

```jsx
getAllBooks().then(function(payload) {
  const books = payload.books // [{ book1 }, { book2 }, ...]
  const data = payload.data // body completo retornado pela API
  const response = payload.response // metadados da request

  // ...
}).catch(function(error) {
  // ...
})
```

## Exemplo

 - https://compasso-reads.netlify.app/
