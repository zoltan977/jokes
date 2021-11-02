## Chuck Norris jokes

Chuck Norris jokes is an online, mobile-friendly, ReactJS powered application that uses the [CHUCKNORRIS.IO](https://api.chucknorris.io/) API to show random Chuck Norris jokes belonging to a selected category.

## Features

- There is only one page
- On the top of the page categories are shown
- Selected category has a gray background and white text
- You can select a category by clicking on it
- Upon clicking on a category a random joke which belongs to the selected category is shown
- There is a "none" category on the top of the categories which is selected by default
- When you click on "none" no joke is shown and no category is selected
- During page loading when categories are queried and after clicking on a category when a joke is loading a loading animation is shown

## Tech

Chuck Norris jokes uses ReactJS and React Testing Library

- [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Library for testing React components
- [Chuck Norris API](https://api.chucknorris.io/) - Retrives random jokes and joke categories in JSON format

## Installation

Chuck Norris jokes requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies.
Open your favorite Terminal and run these commands.

```sh
npm i
npm start
```

You should see the running application by navigating to

```sh
127.0.0.1:3000
```

in your preferred browser

## Frontend unit tests

Unit tests were written by React Testing Library and can be run in a terminal as well

```sh
npm run test
```
