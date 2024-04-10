let DEFAULT_COUNTRY = 'us';

export const getConstant = () => {
  const API_KEY = 'd08ef160b1a9499789dc754a740e718c';
  const API_URL = 'https://newsapi.org/v2/';

  const logo = document.querySelector('.logo');
  const main = document.querySelector('main');
  const newsList = document.querySelector('.news-list');
  const countrySelect = document.querySelector('.js-choice');
  const searchForm = document.querySelector('.form-search');
  const searchInputField = document.querySelector('.search-input');

  return {
    API_KEY,
    API_URL,
    DEFAULT_COUNTRY,
    logo,
    main,
    newsList,
    countrySelect,
    searchForm,
    searchInputField,
  };
};

export const setDefaultCountry = (country) => {
  DEFAULT_COUNTRY = country;
};

export { DEFAULT_COUNTRY };

