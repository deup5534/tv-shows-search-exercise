const handleSearch = async (event) => {
  event.preventDefault();
//Aluno

  const menssagem = document.getElementById("message");
  const conteudo = document.getElementById("shows");
  const entradaTexto = document.getElementById("query");

  const endpoint = `https://api.tvmaze.com/search/shows?q=${entradaTexto.value}`;
  const resposta = await fetch(endpoint);
  const show = await resposta.json();

  //conteúdo que o usuário escreveu

if(show.lenght === 0){
  menssagem.innerHTML = 'Busca não encontrada...';  
  return;
}

menssagem.innerHTML = '';

show.forEach((entry) => {
  conteudo.insertAdjacentHTML(
    'beforeEnd',
    `<li>
    <img class="poster" src='${entry?.show?.image?.medium || ''}  /> 
    <span class="show-name">${entry?.show?.name || ''}</span> 
    </li>`)
  });


//-----------------------------------------------------------------------------------------------------------------

//Professor

  //// Exemplo de endpoint: https://api.tvmaze.com/search/shows?q=lost

  //// Elementos de leiaute importantes:

  //  #message: use para exibir mensagens aos usuário, por exemplo:
  
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
