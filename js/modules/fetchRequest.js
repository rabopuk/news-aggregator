export const fetchRequest = async (url, postfix, apiKey, {
  method = 'GET',
}) => {
  console.log('fetchRequest called');

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
