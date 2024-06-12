### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
run in parallel with using promises and await, you can run a loop on them and create an array of promises. 

- What is a Promise?
a promise is a one time guarantee of a future value. When you make a promise you are letting other code run while you wait for that promise. 

- What are the differences between an async function and a regular function?
when you incluse async infront of a function it allows you to write asyncrounous code that looks syncronouse, they also always return a promise. makes the await term available to use

- What is the difference between Node.js and Express.js?
express is built on top of node. so it adds more features such as middleware and routing.

- What is the error-first callback pattern?
does error handing at the begging of the function

- What is middleware?
Middle ware is like a middle man in that it catches information and minipulates it before passing it along. an example would be when a user is logging in and you need to authenticate that user, additional middle ware could be used to figure out further information like is this user a admin.

- What does the `next` function do?
the next() function is going to go to the next function that should happen. if there is an error you could call next on that which the next thing for an error to encounter is your error handling function. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

const USER_URL = 'https://api.github.com/users/';

async function getUser(user) {
  return await $.getJSON(`${USER_URL}${user}`)};
}

const elie = getUser("elie");
const joel = getUser("joelburton");
const matt = getUser("mmmaaatttttt");

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
