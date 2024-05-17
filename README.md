# Express REST Guest List API

A simple, naïve, in-memory RESTful guest list API in Express.

## Installation

```sh
git clone https://github.com/upleveled/express-guest-list-api-memory-data-store.git
cd express-guest-list-api-memory-data-store
pnpm install
pnpm start
```

## Usage

### Base URL

```js
const baseUrl = 'http://localhost:4000';
```

### Getting all guests (aka `GET /guests`)

```js
const response = await fetch(`${baseUrl}/guests`);
const allGuests = await response.json();
```

### Getting a single guest (aka `GET /guests/:id`)

```js
const response = await fetch(`${baseUrl}/guests/:id`);
const guest = await response.json();
```

### Creating a new guest (aka `POST /guests`)

```js
const response = await fetch(`${baseUrl}/guests`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
});
const createdGuest = await response.json();
```

### Updating a guest (aka `PUT /guests/:id`)

```js
const response = await fetch(`${baseUrl}/guests/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ attending: true }),
});
const updatedGuest = await response.json();
```

### Deleting a guest (aka `DELETE /guests/:id`)

```js
const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
const deletedGuest = await response.json();
```

<!--

## Deploying to Heroku

Create a Heroku account at [Heroku - Sign up](https://signup.heroku.com/), and then click on this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/upleveled/express-guest-list-api-memory-data-store/tree/main)

This will set up a new application on your Heroku account using this repo as a template.

-->

### Import to CodeSandbox

1. Log in or register on [CodeSandbox - Sign in](https://codesandbox.io/signin)
2. Change the `express-guest-list-api-memory-data-store` repo URL to include "box" (`githubbox.com` instead of `github.com`) and hit return - this will open the project on CodeSandbox
3. Click on "Fork" in the top right corner of the page to create your own personal copy of the project
4. Beside "Fork", click "Share", select "Public" from the "Visibility" dropdown and click "Move Devbox" - this will allow access to your devbox from anyone

## Related

- [Naïve Guest List API with Expo API Routes](https://gist.github.com/karlhorky/46785c6f90924738fdb44bf2e1931f17)
