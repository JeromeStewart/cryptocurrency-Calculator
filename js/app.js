//instantiate classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

//Create variables
const form = document.querySelector('#form');

//Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currencySelect = document.querySelector('#currency').value;

    const cryptoCurrencySelect = document.querySelector('#cryptocurrency').value;

    //Validate the select
    if (currencySelect === '' || cryptoCurrencySelect === '') {
      
        ui.printErrorMessage('All the fileds are mandatory', 'deep-orange darken-4 card-panel');
    }
    else{
       cryptoAPI.queryAPI(currencySelect,cryptoCurrencySelect)
       .then(result => {
           let cryptoCurrencyName = result.queryResult.data.name,

           cryptoCurrencyPrice = result.queryResult.data.quotes.USD.price,

           percentChange = result.queryResult.data.quotes.USD;

           ui.displayResult(cryptoCurrencyName,cryptoCurrencyPrice,currencySelect, percentChange);
       })
    }
});
