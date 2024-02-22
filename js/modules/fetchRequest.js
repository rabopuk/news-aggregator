export const fetchRequest = async (url, postfix, apiKey, {
  method = 'GET',
}) => {
  try {
    const options = {
      method,
      headers: {
        'X-Api-Key': apiKey,
      },
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
//     "totalResults": num,
//       "articles": [
//         {
//           "source": {
//             "id": ""
//             "name": ""
//           },
//           "author": "author",
//           "title": "title",
//           "description": "description",
//           "url": "url",
//           "urlToImage": "urlToImage",
//           "publishedAt": "publishedAt",
//           "content": "content"
//         }
//       ]
// };
