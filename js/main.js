import { renderCards } from './modules/card.js';
import { getConstant } from './modules/constants.js';
import { fetchRequest } from './modules/fetchRequest.js';
import { createSection } from './modules/layout.js';
import { initListeners } from './modules/listeners.js';

const init = async () => {
  const {
    API_URL,
    API_KEY,
    DEFAULT_COUNTRY,
    main,
  } = getConstant();


  const headlinesPostfix =
    `top-headlines?country=${DEFAULT_COUNTRY}&pageSize=8&apiKey=${API_KEY}`;
  const dataNews = await fetchRequest(API_URL, headlinesPostfix);

  const newsSection =
    createSection(`Свежие новости ${DEFAULT_COUNTRY.toUpperCase()}`);
  main.append(newsSection);

  const newsList = newsSection.querySelector('.news-list');

  renderCards(dataNews, newsList);
  initListeners();
};

(() => {
  document.addEventListener('DOMContentLoaded', init);
})();
