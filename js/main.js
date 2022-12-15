var quotes = [
  {
    quote: "1-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "2-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "3-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "4-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "5-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "6-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "7-Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
];

var btn = document.getElementById("newQuote");

btn.addEventListener("click", function () {
  var item = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(item);

  document.getElementById(
    "quoteView"
  ).innerHTML = `<p>${item.quote}</p> <h6> ${item.author}</h6>`;
});
