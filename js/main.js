import { createPreloader, renderCards } from './modules/card.js';
import { getConstant } from './modules/constants.js';
import { fetchRequest } from './modules/fetchRequest.js';
import { createSection } from './modules/layout.js';
import { initListeners } from './modules/listeners.js';

export const init = async () => {
  const {
    API_URL,
    API_KEY,
    DEFAULT_COUNTRY,
    main,
  } = getConstant();

  main.innerHTML = '';

  const headlinesPostfix =
    `top-headlines?country=${DEFAULT_COUNTRY}&pageSize=8&apiKey=${API_KEY}`;

  const newsSection =
    createSection(`Свежие новости ${DEFAULT_COUNTRY.toUpperCase()}`);
  main.append(newsSection);

  const newsList = newsSection.querySelector('.news-list');

  const preloader = createPreloader();
  preloader.style.position = 'absolute';
  preloader.style.left = '50%';
  preloader.style.transform = 'translateX(-50%)';
  newsList.append(preloader);

  await new Promise(resolve => setTimeout(resolve, 0));

  const dataNews = await fetchRequest(API_URL, headlinesPostfix);

  renderCards(dataNews, newsList);

  preloader.remove();
};

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initListeners();
  });
})();
