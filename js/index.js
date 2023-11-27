const API = axios.create({
    baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
});

const elMainMenu = document.getElementById("mainMenu");
const elArticlesTrending = document.getElementById('articlesTrending')

// Render Menu
API.get(`categories_news`).then((response) => {
  const data = response.data;
  const categories = data.data;

  let htmlMenu = "";
  let htmlMenuOther = "";
  categories.forEach((item, index) => {
    if (index < 3) {
      htmlMenu += `<li><a href="#">${item.name}</a></li>`;
    } else {
      htmlMenuOther += `<li><a href="#">${item.name}</a></li>`;
    }
  });

  elMainMenu.innerHTML =
    htmlMenu +
    /* html */
    `<li class="dropdown">
        <a href="#">
            <span>Danh mục khác</span> <i class="bi bi-chevron-down dropdown-indicator"></i>
        </a>
        <ul>${htmlMenuOther}</ul>
    </li>`;
});

//  Render Articles Trending
API.get(`articles/popular?limit=5`).then((response) => {
    console.log('respone', response);
    const articles = response.data.data;
    console.log(articles);
    let html = '';
    articles.forEach((item, index) => {
        html += /* html */
        `<li>
            <a href="#">
            <span class="number">${index + 1}</span>
            <h3>${item.title}</h3>
            <span class="author">${item.author}</span>
            </a>
        </li>`
    });

    elArticlesTrending.innerHTML = html;
});
