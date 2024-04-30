const url = "https://jsonplaceholder.typicode.com/users";

// const response = await fetch(url);
// const users = await response.json();

// console.log(users);

fetch(url)
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.log(error));
