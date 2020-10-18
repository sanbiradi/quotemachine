var endPoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

function getQuote(){
    fetch(endPoint).then(function(response){
        return response.json();
    }).then(function(data){
        displayQuote(data.message);
    }).catch(function(){
        console.log('an error are occure ')
    })
}

var displayQuote = function(qoute){
    var displayMessage = document.querySelector('.quote-text');
    displayMessage.textContent = qoute;
}


var newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click',getQuote);
getQuote();
