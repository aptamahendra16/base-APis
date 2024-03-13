const axios = require('axios');

async function chatGpt(query) {
    try {
      const response = await axios.post(
        'https://api.pawan.krd/v1/chat/completions', 
        {
          model: "pai-001",
          max_tokens: 2000,
          messages: [
            { role: "system", content: "You are ShiinaBot with model gpt-4-turbo-preview, your owner is dnm!" },
            { role: "user", content: query }
          ]
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `pk-bFaXWYAqcVGngyPigcUusIrmaTLOMmdYtLWeDLCwWgIsEHZO`,
          },
        }
      );

      return response.data
    } catch (error) {
      console.error(error);
    }
}

module.exports = chatGpt;
