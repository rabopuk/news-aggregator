import { init } from '../main.js';
import { createPreloader, renderCards } from './card.js';
import { getConstant, setDefaultCountry } from './constants.js';
import { fetchRequest } from './fetchRequest.js';
import { createSection } from './layout.js';
import { pluralizeResults } from './utils.js';

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

  main.innerHTML = '';

  const searchSection =
    createSection(`По вашему запросу “${searchInput}”`);
  main.append(searchSection);

  const searchList = searchSection.querySelector('.news-list');

  const freshNewsSection =
    createSection(`Свежие новости ${DEFAULT_COUNTRY.toUpperCase()}`);
  main.append(freshNewsSection);

  const freshNewsList = freshNewsSection.querySelector('.news-list');

  const preloader = createPreloader();
  preloader.style.position = 'absolute';
  preloader.style.left = '50%';
  preloader.style.transform = 'translateX(-50%)';
  searchList.append(preloader.cloneNode(true));
  freshNewsList.append(preloader.cloneNode(true));

  const searchPromise = searchInput ?
    fetchRequest(API_URL, searchPostfix) :
    Promise.resolve(null);

  const headlinesPromise = fetchRequest(API_URL, headlinesPostfix);

  const [searchResults, headlines] =
    await Promise.all([searchPromise, headlinesPromise]);

  searchList.querySelector('.preload').remove();
  freshNewsList.querySelector('.preload').remove();

  if (searchInput && searchResults) {
    searchSection.querySelector('h2').textContent +=
      ` ${searchResults.articles.length}
        ${pluralizeResults(searchResults.articles.length)}
      `;

    renderCards(searchResults, searchList);
  }

  renderCards(headlines, freshNewsList);

  searchInputField.value = '';
};

export const initListeners = () => {
  const { logo, searchForm, countrySelect } = getConstant();

  logo.addEventListener('click', init);

  searchForm.addEventListener('submit', handleSearchSubmit);

  countrySelect.addEventListener('change', ({ target }) => {
    const country = target.value;

    if (country === '') {
      setDefaultCountry('us');
    } else {
      setDefaultCountry(country);
    }

    init();
  });
};
