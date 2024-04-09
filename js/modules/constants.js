export const getConstant = () => {
  const API_KEY = 'd08ef160b1a9499789dc754a740e718c';
  const API_URL = 'https://newsapi.org/v2/';

  const DEFAULT_COUNTRY = 'us';

  const COUNTRIES = {
    'ru': 'Россия',
    'ua': 'Украина',
    'us': 'США',
    'de': 'Германия',
    'cz': 'Чехия',
    'pl': 'Польша',
    'lv': 'Латвия',
    'lt': 'Литва',
  };

  const main = document.querySelector('main');
  const newsList = document.querySelector('.news-list');
  const countrySelect = document.querySelector('.js-choice');
  const searchForm = document.querySelector('.form-search');
  const searchInputField = document.querySelector('.search-input');

  return {
    API_KEY,
    API_URL,
    DEFAULT_COUNTRY,
    COUNTRIES,
    main,
    newsList,
    countrySelect,
    searchForm,
    searchInputField,
  };
};
