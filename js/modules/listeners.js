import { renderCards } from './card.js';
import { getConstant } from './constants.js';
import { fetchRequest } from './fetchRequest.js';

const handleSubmit = async e => {
  console.log('Form submitted');
  e.preventDefault();

  const {
    API_KEY,
    API_URL,
    DEFAULT_COUNTRY,
    titleContainer,
    mainTitle,
    newsList,
    countrySelect,
    searchInputField,
  } = getConstant();

  const searchInput = searchInputField.value.trim();

  const country = countrySelect.value || DEFAULT_COUNTRY;

  const searchPostfix =
    `everything?q=${searchInput}&apiKey=${API_KEY}&pageSize=8`;
  const headlinesPostfix =
    `top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=4`;

  const searchPromise = searchInput ?
    fetchRequest(API_URL, searchPostfix, API_KEY, {}) :
    Promise.resolve(null);

  const headlinesPromise = fetchRequest(API_URL, headlinesPostfix, API_KEY, {});

  const [searchResults, headlines] =
    await Promise.all([searchPromise, headlinesPromise]);

  mainTitle.classList.add('visually-hidden');

  newsList.innerHTML = '';

  if (searchInput && searchResults) {
    const searchTitle = document.createElement('h2');
    searchTitle.classList.add('title');
    searchTitle.textContent = `По вашему запросу “${searchInput}” найдено ${searchResults.articles.length} результатов`;
    titleContainer.append(searchTitle);

    renderCards(searchResults, newsList);
  }

  const freshNewsTitle = document.createElement('h2');
  freshNewsTitle.classList.add('title');
  freshNewsTitle.textContent = 'Свежие новости';
  titleContainer.append(freshNewsTitle);

  renderCards(headlines, newsList);
};

export const initListeners = () => {
  const { searchForm } = getConstant();

  searchForm.addEventListener('submit', handleSubmit);
};
