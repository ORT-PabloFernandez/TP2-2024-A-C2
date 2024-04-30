const url = "https://api.openai.com/v1/chat/completions";
const promt = "Hola, sabes quien es Gabriel Garcia Marquez?";
const token = env.TOKEN;

const body = {
  model: "gpt-4-turbo",
  messages: [
    {
      role: "user",
      content: promt,
    },
  ],
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
  body: JSON.stringify(body),
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    console.log(data.choices[0].message.content);
  });
