var quotes = [{
  quote: "The great gift of human beings is that we have the power of empathy",
  source: "Meryl Streep",
  date: "1988",
},
{
  quote: "If you don't like something, change it. If you can't change it, change your attitude",
  source:  "Maya Angelou",
  citation: "https://www.goalcast.com/2017/04/03/maya-angelou-quotes-to-inspire-your-life/",
},
{
  quote: "There are still many causes worth sacrificing for, so much history yet to be made",
  source: "Michelle Obama",
  citation: "https://www.brainyquote.com/authors/michelle_obama",
},
{
  quote: "All that I am or hope to be, I owe to my angel mother",
  source: "Abraham Lincoln",
  citation: "https://www.goodreads.com/author/quotes/229.Abraham_Lincoln",
},
{
  quote : "Ask not what your country can do for you, but what you can do for your country",
  source: "John F. Kennedy",
  date: "1962"
}];

function getRandomQuote(array) {
  // Random number generator
  var quoteIndex = Math.floor(Math.random() * (quotes.length));

  for (var i = 0; i < array.length; i++) {
// quotes.length is used to specify the length of the quote and where it ends.
// array.length is used to add number to array.

    var randomQuote = array[quoteIndex];
    // Random quote variable with the index set to random number variable
  }
  return randomQuote; // Returns random quote variable
}

function printQuote() {
  var result = getRandomQuote();
  console.log(result);
  message =
  '<p class="quote">' + result.quote + '</p>'
  + '<p class="source">' + result.source + '</p>'
  += '<span class="date">' + result.date + '</span>'
  += '<span class="date">' + result.citation + '</span>'
  + '</p>';

  document.getElementById('quote-box').innerHTML = message;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
