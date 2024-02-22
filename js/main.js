import { renderCards } from './modules/card.js';
import { getConstant } from './modules/constants.js';
import { fetchRequest } from './modules/fetchRequest.js';

const init = async () => {
  const { API_URL, API_KEY, newsList } = getConstant();
  const postfix = `top-headlines?country=us&apiKey=${API_KEY}`;

  // const dataNews = await fetchRequest(API_URL, postfix, API_KEY, {});
  console.log('data: ', dataNews);

  renderCards(dataNews, newsList);
};

document.addEventListener('DOMContentLoaded', init);
