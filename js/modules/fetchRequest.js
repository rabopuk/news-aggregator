export const fetchRequest =
  async (url, postfix, { method = 'GET' } = {}) => {
    try {
      const options = {
        method,
      };

      const response = await fetch(`${url}${postfix}`, options);

      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    } catch (error) {
      console.error('Ошибка:', error.message);
      throw error;
    }
  };

// {
//   "status": "ok",
//     "totalResults": n,
//       "articles": [
//         {
//           "source": {
//             "id": ""
//             "name": ""
//           },
//           "author": "",
//           "title": "",
//           "description": "",
//           "url": "",
//           "urlToImage": "",
//           "publishedAt": "",
//           "content": ""
//         }
//       ]
// };
