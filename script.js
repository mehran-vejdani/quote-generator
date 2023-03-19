const generate = document.querySelector(".btn");
const paragraph = document.querySelector("#quote");
const author = document.querySelector("#author");

let freeQuotes = {
  jules_Renard:
    "The truly free man is the one who can turn down an invitation to dinner without giving an excuse",
  AlbertEinstein:
    "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty",
  DeepakChopra:
    "Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.",
  Madeline: "Bury us, and mark our names above. Let us be free",
  CSLewis: "I was not born to be free---I was born to adore and obey",
};

generate.addEventListener("click", () => {
  let quotes = freeQuotes;
  let authorsKey = Object.keys(quotes);
  let authorName = authorsKey[Math.floor(Math.random() * authorsKey.length)];
  let quote = quotes[authorName];
  paragraph.innerHTML = quote;
  author.innerHTML = authorName;
});
