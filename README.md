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

## Deploy on Render

1. Click "Fork" at the top right of the `express-guest-list-api-memory-data-store` GitHub repository page, select your GitHub account and click "Create fork" to create a copy of the GitHub repository in your account
2. On [Render - Create an account](https://dashboard.render.com/register), click "GitHub" and click "Authorize"
3. Confirm the prefilled email address in "Email" and click "Create Account"
4. Open the email titled "Activate your Render account" and click "Verify your email"
5. On the "Create a new workspace" page, click "Skip Survey" at the bottom of the page
6. Click "New Web Service" under "Web Services"
7. Under "Git Provider", click "GitHub". A new window will open, where you will be prompted to install the Render GitHub app. Select your GitHub account. Choose the **Only select repositories** option and select only the repository that you want to deploy. Click **Install**
8. Back on Render, click your forked repository `express-guest-list-api-memory-data-store`
9. Select **Frankfurt (EU Central)** as the region
10. Under "Compute", select the "$0 / month" option marked "Free"
11. Click "Deploy web service" and wait until the status shows "Deploy succeeded | Live"
12. Click the Render logo at the top left and click "My project" under "Projects"
13. On the "My project" page, click the gear icon next to "My project"
14. On the "Project settings" page, under "Project Name", replace "My project" with "UpLeveled Express Guest List API" and click "Save"
15. Click "Overview" on the left and click `express-guest-list-api-memory-data-store` to continue to the service page

The API URL is the `onrender.com` URL on the service page, below the GitHub repository name.

[Render Free web services](https://render.com/docs/free#free-web-services) have limitations: the server stops after 15 minutes without requests and restarts on new requests (the in-memory guest list is cleared whenever the server restarts).

## Related

- [Naïve Guest List API with Expo API Routes](https://gist.github.com/karlhorky/46785c6f90924738fdb44bf2e1931f17)
