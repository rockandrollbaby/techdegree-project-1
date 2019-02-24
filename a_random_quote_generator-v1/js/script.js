// created a quotes array with quote object literals to hold various famous quotes

var quotes = [{
  quote: "The great gift of human beings is that we have the power of empathy",
  source: "Meryl Streep",
  year: "1988",
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
  year: "1962",
}];

// created a function to get a random quote from the quotes array using array as a perimeter

function getRandomQuote(array) {
  // Random number generator
  var quoteIndex = Math.floor(Math.random() * (array.length));

  for (var i = 0; i < array.length; i++) {
// array.length is used to add number to array.

    var randomQuote = array[quoteIndex];
    // Random quote variable with the index set to random number variable
  }
  return randomQuote; // Returns random quote variable
}

// created a function to print the quotes based on whether a year or citation exists using two conditional statements
// quote, source, year and citation are properties on the result object.
// the quotes aray is passed to the getRandomQuote, is called and goes into the result variable.

function printQuote() {
  var message = " ";
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;

  if (result.year) {
     message += "<span class='year'>" + result.year + "</span>";
}

  if (result.citation) {
    message += "<span class='citation'>" + result.citation + "</span>";
}
+ "</p>";

  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

// added a button to generate a random quote and display it to the page

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
