const apiKey = "dafa61bfc4364ad794e016a0f4178c6d";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${apiKey}`);
  const data = await res.json();
  if (data.articles.length === 0) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "<h2>Try again with a different search.</h2>";
  } else bindData(data.articles);
}

function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (article.urlToImage) {
      const cardClone = newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone, article);
      cardsContainer.appendChild(cardClone);
    }
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.getElementById("news-img");
  const newsTitle = cardClone.getElementById("news-title");
  const newsSource = cardClone.getElementById("news-source");
  const newsDesc = cardClone.getElementById("news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timezone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} • ${date}`;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let currSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  currSelectedNav?.classList.remove("active");
  currSelectedNav = navItem;
  currSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
  const query = searchText.value;
  if (!query) return;
  fetchNews(query);
  currSelectedNav?.classList.remove("active");
  currSelectedNav = null;
});
