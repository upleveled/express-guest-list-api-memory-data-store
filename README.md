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

## Deploy on Deno Deploy

1. Click "Fork" at the top right of the `express-guest-list-api-memory-data-store` GitHub repository page, select your GitHub account and click "Fork" to create a copy of the GitHub repository in your account
2. On [Deno Deploy - New App](https://console.deno.com/new), click on "Sign in with GitHub", authorize Deno Deploy to access your GitHub account and accept the terms and conditions
3. If your account doesn't appear in the "Select user or organization" dropdown, select "Add another GitHub Account", and then on the install page on GitHub, select your GitHub account, choose "Only select repositories", select the repository `express-guest-list-api-memory-data-store` from the dropdown and click the green "Install" button
4. Select your GitHub account in the dropdown and select the forked repository `express-guest-list-api-memory-data-store`
5. Scroll to the bottom of the page and click "Create App"
6. After all stages of the build are marked with green checkmarks, click "Overview" on the left to continue to the project overview page

The API URL is on the top right of the project overview page under "Production URL".

## Related

- [Naïve Guest List API with Expo API Routes](https://gist.github.com/karlhorky/46785c6f90924738fdb44bf2e1931f17)
