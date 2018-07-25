class CryptoAPI {


   async getCryptoCurrenciesList(){
        const url = await fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array');

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }

    //
   async queryAPI(currency,cryptoCurrency){
       const url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${cryptoCurrency}/?convert=${currency}`);

       const queryResult = await url.json();

       return {
            queryResult
       } 
    }
}