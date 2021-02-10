//My api key
let apikey = {
  key: 'a6e125c5-0ea5-4159-801e-4db1b40b5b95'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
  apikey.key)
  .then((response) => {
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
  })
  .then((api) => {

let texto = "";
// Get 10 coins and symbols 
for (let i = 0; i < 10; i++) {


//Show API information

      texto = texto + 
      `<div class="media">
      <img src="img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
      <div class="media-body">
      <h5 class="mt-2">${api.data[i].name}</h5>
      <h5 class="mt-2">${api.data[i].first_historical_data}</h5>
      <p>${api.data[i].symbol}</p>
      </div></div>`;

      document.getElementById("coins").innerHTML = texto;

    }
  })
  .catch((error) => {
    console.error(error.message);
  });