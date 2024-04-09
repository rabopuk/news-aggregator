import { renderCards } from './card.js';
import { getConstant } from './constants.js';
import { fetchRequest } from './fetchRequest.js';
import { createSection } from './layout.js';

const handleSearchSubmit = async e => {
  e.preventDefault();

  const {
    API_KEY,
    API_URL,
    DEFAULT_COUNTRY,
    main,
    searchInputField,
  } = getConstant();

  const searchInput = searchInputField.value.trim();

  const searchPostfix =
    `everything?q=${searchInput}&pageSize=8&apiKey=${API_KEY}`;
  const headlinesPostfix =
    `top-headlines?country=${DEFAULT_COUNTRY}&pageSize=4&apiKey=${API_KEY}`;

  const searchPromise = searchInput ?
    fetchRequest(API_URL, searchPostfix) :
    Promise.resolve(null);

  const headlinesPromise = fetchRequest(API_URL, headlinesPostfix);

  const [searchResults, headlines] =
    await Promise.all([searchPromise, headlinesPromise]);

  main.innerHTML = '';

  if (searchInput && searchResults) {
    const searchSection =
      createSection(`По вашему запросу “${searchInput}” показано
        ${searchResults.articles.length} результатов`);

    main.append(searchSection);

    const searchList = searchSection.querySelector('.news-list');

    renderCards(searchResults, searchList);
  }

  const freshNewsSection =
    createSection(`Свежие новости ${DEFAULT_COUNTRY.toUpperCase()}`);

  main.append(freshNewsSection);

  const freshNewsList = freshNewsSection.querySelector('.news-list');

  renderCards(headlines, freshNewsList);
};

export const initListeners = () => {
  const { searchForm } = getConstant();

  searchForm.addEventListener('submit', handleSearchSubmit);
};
