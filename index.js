const handleSearch = async (event) => {
  event.preventDefault();
//em cima deixa

  const espacoMensagem = document.getElementById("mensagem");
  const espacoFoto = document.getElementById("shows");
  const entradaTexto = document.getElementById("query");

  const endpoint = `https://api.tvmaze.com/search/shows?q=${entradaTexto.value}`;
  const resposta = await fetch(endpoint);

  //// Exemplo de endpoint: https://api.tvmaze.com/search/shows?q=lost

  //// Elementos de leiaute importantes:

  //  #message: use para exibir mensagens aos usuário, por exemplo:
  
  const erro = document.querySelector('#message');
  erro.innerHTML = '<img id="erro" src="https://preview.redd.it/7fcu41hi2re41.png?auto=webp&s=038dc69c1622eb809ebbfbc15c22c5f6739dca65" alt="o gato Tom dando os ombros">';
  
  
  //  #shows: conterá os shows, cada um em um <li>, por exemplo:
  // <li>
  //   <img class="poster" src="https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg" />
  //   <span class="show-name">Lost</span>
  // </li>
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
