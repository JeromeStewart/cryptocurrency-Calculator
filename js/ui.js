class UI {
    constructor(){
        this.init();
    }

    init(){
        this.printCrytoCurrencies();
    }

    printCrytoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
       .then(data => {
         const cryptoCurrencies = data.cryptoCurrencies.data;
         
        const select = document.querySelector('#cryptocurrency');
        
        cryptoCurrencies.forEach(currency => {
           const option = document.createElement('option');
           option.value = currency.id;
           option.appendChild(document.createTextNode(currency.name));
           select.appendChild(option);
        })
       })
    }

    //Printing error message on form
    printErrorMessage(message,className){
        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');

        messageDiv.appendChild(div);

        //Remove div error message
         setTimeout(() => {
            document.querySelector('.messages div').remove();
         }, 3000);
    }

    displayResult(cryptoName,cryptoPrice,currencyName, cryptoPercent){
        let html = ``;

        let previousDiv =  document.querySelector('#result div');

        if (previousDiv) {
            previousDiv.remove();
        }

        html += `
            <div class="card green accent-4">
            <div class="card-content white-text">
               <span class="card-title">Conversion</span>
               <p>The price of 1 ${cryptoName} is $${cryptoPrice} ${currencyName}</p>
               <span class="card-title">Percent change</span>
               <p>Last hour: ${cryptoPercent.percent_change_1h}%</p>
               <p>Last 24 hours: ${cryptoPercent.percent_change_24h}%</p>
               <p>Last 7 days: ${cryptoPercent.percent_change_7d}%</p>
            </div>
            </div>
        `;

        this.showSpinner();

        setTimeout(() => {
            document.querySelector('#result').innerHTML = html;
            
            document.querySelector('.spinner img').remove();

        },3000);
       
    }

    showSpinner(){
        const spinnerGif = document.querySelector('.spinner');
        const spinner = document.createElement('img');
        spinner.src = 'img/spinner.gif';
        spinner.alt = "Loading spinner gif";

        spinnerGif.appendChild(spinner);

    }
}