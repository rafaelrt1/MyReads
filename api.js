const api = "https://reactnd-books-api.udacity.com";

window.token = localStorage.token;

if (!window.token) {
  window.token = localStorage.token = Math.random().toString(36).substr(-8);
}

function getAllBooks() {
  return new Promise(function (resolve, reject) {
    fetch(api + '/books', { headers: { 'Accept': 'application/json', 'Authorization': window.token } })
      .then(response => {
        response.json().then(data => {
          const books = data.books

          return resolve({ books, data, response })
        })
      }).catch(reject)
  })
}
