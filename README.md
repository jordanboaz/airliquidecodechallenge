# Air Liquide Code Challenge

This project runs on React Native.

The objective of this repo is to display the correct way to use redux along with a middleware for side-effects.

##### tl;dr: if you are here to check it, main code is on the [store folder](https://github.com/jordanboaz/airliquidecodechallenge/tree/master/src/store/todos)

### How to run:

Clone this repository and then install all dependencies by running:

``` 
yarn && yarn android
```

If you want to run it on android, type the command:
``` 
yarn android
```

If you are on a macOS machine and want to run it in a iOS simulator, you first need to run:

``` 
cd ios && pod install
```

After completing this, you can:

``` 
yarn ios
```


## Tech and libraries

### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.63.2.

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### Main libs:

- [redux](https://redux.js.org/) for state management of the application.
- [redux-saga](https://redux-saga.js.org/) middleware for managing side-effects on redux store.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.

### Patterns

It is always important to follow a certain pattern when developing. It makes the code more readable and assists new joining programmers to ramp up faster when getting in touch with the code for the first time.

As this repository is made only to display the use of side-effects, I followed the [`duck pattern`](https://github.com/erikras/ducks-modular-redux), a very common pattern for developers working on redux, suggested by the own creator. 
