const createPreloader = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('preload');

  const img = document.createElement('img');
  img.src = '/img/Vector.svg';
  overlay.append(img);

  const show = parentElement => {
    parentElement.append(overlay);
  };

  const remove = () => {
    overlay.remove();
  };

  return { show, remove };
};

const createCard = data => {
  const card = document.createElement('li');
  card.classList.add('news-item');

  const img = document.createElement('img');

  const preload = createPreloader();

  img.onload = () => {
    preload.remove();
  };

  img.onerror = () => {
    preload.remove();
    img.src = '../../img/unsplash_xsGxhtAsfSA.jpg';
  };

  img.src = data.urlToImage || '';

  img.alt = data.title;
  img.classList.add('news-image');

  preload.show(card);

  card.append(img);

  const title = document.createElement('h3');
  title.classList.add('news-title');
  const link = document.createElement('a');
  link.href = data.url;
  link.classList.add('news-link');
  link.textContent = data.title;
  title.append(link);

  const description = document.createElement('p');
  description.classList.add('news-description');
  description.textContent = data.description;

  const footer = document.createElement('div');
  footer.classList.add('news-footer');

  const time = document.createElement('time');
  time.classList.add('news-datetime');
  time.datetime = data.publishedAt;
  const date = document.createElement('span');
  date.classList.add('news-date');
  date.textContent = new Date(data.publishedAt).toLocaleDateString();
  time.append(date);
  time.append(new Date(data.publishedAt).toLocaleTimeString());

  const author = document.createElement('p');
  author.classList.add('news-author');
  author.textContent = data.author ?? '';

  footer.append(time, author);

  card.append(title, description, footer);

  return card;
};

export const renderCards = (data, list) => {
  data.articles.forEach(article => {
    const card = createCard(article);
    list.append(card);
  });
};
