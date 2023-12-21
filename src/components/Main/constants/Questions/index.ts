const short = [
  'When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?',
  'Can you describe some SEO best practices or techniques you have used lately?',
  'Can you explain any common techniques or recent issues solved in regards to front-end security?',
  'Can you describe your workflow when you create a web page?',
  'Can you describe the difference between progressive enhancement and graceful degradation?',
  'Name 3 ways to decrease page load (perceived or actual load time).',
  'What does CORS stand for and what issue does it address?',
  'Explain the difference between cookies, session storage, and local storage?',
  'Explain how this works in JavaScript.',
  'Explain how prototypal inheritance works.',
  'What is the difference between a variable that is: null, undefined or undeclared?',
  'What is a closure, and how/why would you use one?',
  'Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?',
  'What is a typical use case for anonymous functions?',
  'Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?',
  'Explain the differences on the usage of foo between function foo() {} and var foo = function() {}',
  'Can you explain what Function.call and Function.apply do? What is the notable difference between the two?',
  'Explain Function.prototype.bind.',
  'Explain event delegation.',
  'Explain "hoisting".',
  'Describe event bubbling.',
  'Describe event capturing.',
  'What is the difference between an "attribute" and a "property"?',
  'What are the pros and cons of extending built-in JavaScript objects?',
  'What is the difference between == and ===?',
  'Explain the same-origin policy with regards to JavaScript.',
  'What is strict mode? What are some of the advantages/disadvantages of using it?',
  'Explain the difference between mutable and immutable objects.',
  'What is an example of an immutable object in JavaScript?',
  'What are the pros and cons of immutability?',
  'How can you achieve immutability in your own code?',
  'Explain the difference between synchronous and asynchronous functions.',
  'What is event loop?',
  'What is the difference between call stack and task queue?',
  'What are the differences between variables created using let, var or const?',
  'Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?',
  'What is the definition of a higher-order function?',
  'Can you give an example for destructuring an object or an array?',
  'What are the benefits of using spread syntax and how is it different from rest syntax?',
  'How can you share code between files?',
  'What is a promise? Where and how would you use promise?',
];

const medium = [
  'What is a RESTful API?',
  'Which best practices would you follow as part of the performance testing process?',
  'Explain what mocking refers to in backend development.',
  'What is the difference between SQL and NoSQL databases?',
  'What is the difference between authentication and authorization?',
  'What is a stored procedure and when would you use one?',
  'What is caching and how does it work?',
  'How would you optimize a slow database query?',
  'What is object-oriented programming?',
  'What is the difference between LinkedList and ArrayList?',
  'What is the difference between stateful and stateless services?',
  'What is a containerization?',
  'What is a load balancer?',
  'What is the difference between threads and processes?',
  'What is a design pattern?',
  'What is a thread?',
  'Define and explain these nine server response error codes: 200, 201, 204, 301, 400, 401, 404, 409 and 500.',
  'What is serialization?',
  'What is the difference between a monolithic and a microservice architecture?',
  'What is the difference between a proxy server and a reverse proxy server?',
  'How would you secure an API?',
  'What is exception handling?',
  'What is a RESTful web service?',
  'What is a web server?',
  'How does HTTPS work?',
  'If you have a limited amount of memory, how would you handle a large amount of data?',
  'What is a message queue?',
  'What is the difference between a message queue and a task queue?',
  'How would you design a scalable backend architecture?',
  'What is a database index?',
  'How would you ensure data consistency in a distributed system?',
  'What is a database schema?',
  'What is database normalization and why is it important?',
  'How would you handle concurrent requests to a database?',
];

export const questions = {
  short,
  medium,
  long: [...short, ...medium],
};
