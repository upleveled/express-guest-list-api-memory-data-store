# express-todo-list-api-memory-data-store

A simple, naïve RESTful to-do list API in Express.js.

## Usage

Use it as follows:

### Base URL

```js
const baseUrl = 'http://localhost:5000';
```

### Getting all todo items (aka `GET /`)

```js
const response = await fetch(`${baseUrl}/`);
const allTodos = await response.json();
```

### Creating a todo item (aka `POST /`)

```js
const response = await fetch(`${baseUrl}/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Walk the dog' }),
});
const createdTodo = await response.json();
```

### Updating a todo item (aka `PATCH /:id`)

```js
const response = await fetch(`${baseUrl}/1`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ completed: true }),
});
const updatedTodo = await response.json();
```

### Deleting a todo item (aka `DELETE /:id`)

```js
const response = await fetch(`${baseUrl}/1`, { method: 'DELETE' });
const deletedTodo = await response.json();
```
