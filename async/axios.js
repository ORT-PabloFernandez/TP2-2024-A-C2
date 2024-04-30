import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

// const users = await axios(url);

// console.log(users.data);

axios(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
