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

1. On [the fork page for `upleveled/express-guest-list-api-memory-data-store`](https://github.com/upleveled/express-guest-list-api-memory-data-store/fork), select your GitHub account and click "Fork" to create a copy of the GitHub repository in your account
2. Sign in to [Deno Deploy](https://dash.deno.com/signin) with your GitHub account
3. On [Create a New Project](https://dash.deno.com/new_project), click on "Continue with GitHub" to sign in to Deno Deploy
4. On the "Create a New Project" page, select your GitHub account in the dropdown and click on "Select" next to the forked repository `express-guest-list-api-memory-data-store`
5. Scroll down to the "Entrypoint" field, select `index.ts` and click "Deploy Project"
6. After successful deployment, a "Success" page will appear - click on "Go to Project" to see the project overview with the deployed URL (ends with `deno.dev`)

## Related

- [Naïve Guest List API with Expo API Routes](https://gist.github.com/karlhorky/46785c6f90924738fdb44bf2e1931f17)
