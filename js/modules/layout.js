export const createSection = (title) => {
  const section = document.createElement('section');
  section.classList.add('container');
  section.innerHTML = `
    <div class="title-wrapper">
      <div class="title container">
        <h2>${title}</h2>
      </div>
    </div>

    <div class="news">
      <ul class="news-list"></ul>
    </div>

  `;

  return section;
};
