import { renderCards } from './modules/card.js';
import { getConstant } from './modules/constants.js';
import { fetchRequest } from './modules/fetchRequest.js';
import { initListeners } from './modules/listeners.js';

const init = async () => {
  const {
    API_URL,
    API_KEY,
    newsList,
    countrySelect,
    titleContainer,
  } = getConstant();
  const country = countrySelect.value || 'us';
  const headlinesPostfix =
    `top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=8`;

  const dataNews = await fetchRequest(API_URL, headlinesPostfix, API_KEY, {});

  renderCards(dataNews, newsList);
  initListeners();
};

(() => {
  document.addEventListener('DOMContentLoaded', init);
})();
