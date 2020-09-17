# Express REST Guest List API (in-memory)

A simple, naïve, in-memory RESTful guest list API in Express.

## Usage

Use it as follows:

### Base URL

```js
const baseUrl = 'http://localhost:5000';
```

### Getting all guests (aka `GET /`)

```js
const response = await fetch(`${baseUrl}/`);
const allGuests = await response.json();
```

### Creating a new guest (aka `POST /`)

```js
const response = await fetch(`${baseUrl}/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
});
const createdGuest = await response.json();
```

### Updating a guest (aka `PATCH /:id`)

```js
const response = await fetch(`${baseUrl}/1`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ attending: true }),
});
const updatedGuest = await response.json();
```

### Deleting a guest (aka `DELETE /:id`)

```js
const response = await fetch(`${baseUrl}/1`, { method: 'DELETE' });
const deletedGuest = await response.json();
```
