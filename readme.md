# React Listings App

## Dependencies
This project is built using the following technologies:
* [Node](https://nodejs.org/en/)
* [Webpack](https://webpack.js.org)
* [React](https://facebook.github.io/react/)
* [Yarn](https://yarnpkg.com/en/)

## Quick Start
The first required step is to download all of the dependencies using Yarn. To do this, make sure [Yarn is installed](https://yarnpkg.com/en/docs/install) and then run the following command:
```
yarn
```
Next, the API token must be set in a `.env` file. Copy your API token to a variable named `TOKEN` in `.env`:
```
TOKEN=your-token-here
```
To run the dev server locally, run the following command and visit `localhost:8080` in the browser:
```
yarn start
```

## TODO
Requirements:

* User should be able to add new listings
* User should be able to remove existing listings
* User should be able to edit an existing listing
* Form fields must respect server-side validation
