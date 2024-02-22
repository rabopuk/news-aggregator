const createCard = data => {
  const card = document.createElement('li');
  card.classList.add('news-item');
  card.innerHTML = `
    <img src="${data.urlToImage}"
      alt="${data.title}"
      class="news-image">
    <h3 class="news-title">
      <a href="${data.url}" class="news-link">
        ${data.title}
      </a>
    </h3>
    <p class="news-description">
      ${data.description}
    </p>
    <div class="news-footer">
      <time class="news-datetime" datetime="${data.publishedAt}">
        <span class="news-date">
          ${new Date(data.publishedAt).toLocaleDateString()}
        </span>
        ${new Date(data.publishedAt).toLocaleTimeString()}
      </time>
      <p class="news-author">${data.author ?? ''}</p>
    </div>
  `;

  return card;
};

export const renderCards = (data, list) => {
  data.articles.forEach(article => {
    const card = createCard(article);
    list.append(card);
  });
};
