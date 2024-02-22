export const getConstant = () => {
  const API_KEY = 'd08ef160b1a9499789dc754a740e718c';
  const API_URL = 'https://newsapi.org/v2/';

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

  const newsList = document.querySelector('.news-list');

  return {
    API_KEY,
    API_URL,
    COUNTRIES,
    newsList,
  };
};
