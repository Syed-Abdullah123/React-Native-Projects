# Nike App

This project is a React Native application named "Nike App". It provides a sleek and interactive UI for browsing Nike products. The application is built with React Native and utilizes various libraries for navigation, state management, and styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [State Management](#state-management)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Syed-Abdullah123/React-Native-Projects.git
    cd React-Native-Projects/NikeApp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    npx react-native run-android   # for Android
    npx react-native run-ios       # for iOS (only on macOS)
    ```

## Usage

Once the application is up and running, you can browse through various Nike products. The app includes several features and screens that enhance user experience.

## Features

- **Product List:** Browse through a list of Nike products with images and prices.
- **Product Details:** View detailed information about each product.
- **Navigation:** Smooth navigation between different screens using React Navigation.
- **State Management:** Efficient state management using React-Redux.

## Screenshots

Include some screenshots of your app here to give a visual overview. You can upload images to your repository and reference them like this:

![Home Screen](./assets/screenshots/home.png)
![Product Details](./assets/screenshots/product_details.png)

## Dependencies

The project relies on several libraries and modules. Here are the main dependencies:

- `react`
- `react-native`
- `react-navigation`
- `react-native-elements`
- `react-redux`
- `redux`

You can find the complete list of dependencies in the `package.json` file.

## State Management

The project uses `react-redux` for state management. Here is a brief overview of how it is implemented:

1. **Setting up Redux Store:**

    Create a `store.js` file to configure the Redux store:
    ```javascript
    import { createStore } from 'redux';
    import rootReducer from './reducers';

    const store = createStore(rootReducer);

    export default store;
    ```

2. **Creating Reducers:**

    Create a `reducers` directory and define your reducers. For example, a `productReducer.js`:
    ```javascript
    const initialState = {
        products: [],
    };

    const productReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_PRODUCTS':
                return { ...state, products: action.payload };
            default:
                return state;
        }
    };

    export default productReducer;
    ```

3. **Combining Reducers:**

    Combine your reducers in an `index.js` file inside the `reducers` directory:
    ```javascript
    import { combineReducers } from 'redux';
    import productReducer from './productReducer';

    const rootReducer = combineReducers({
        product: productReducer,
    });

    export default rootReducer;
    ```

4. **Connecting Redux to React Native:**

    Use the `Provider` component to connect Redux to your React Native app in your `App.js`:
    ```javascript
    import React from 'react';
    import { Provider } from 'react-redux';
    import store from './store';
    import MainNavigator from './navigation/MainNavigator';

    const App = () => {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    };

    export default App;
    ```

5. **Using Redux in Components:**

    Use `useSelector` and `useDispatch` hooks to interact with the Redux store in your components:
    ```javascript
    import React, { useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { fetchProducts } from '../actions/productActions';
    import ProductList from '../components/ProductList';

    const HomeScreen = () => {
        const dispatch = useDispatch();
        const products = useSelector(state => state.product.products);

        useEffect(() => {
            dispatch(fetchProducts());
        }, [dispatch]);

        return <ProductList products={products} />;
    };

    export default HomeScreen;
    ```

## Acknowledgements

This project would not have been possible without the guidance and tutorials provided by [notjust.dev](https://www.notjust.dev/). Check out their YouTube channel and website for more resources:

- YouTube: [notjust.dev YouTube Channel](https://www.youtube.com/@notjustdev)
- Website: [notjust.dev](https://www.notjust.dev/)

## License

This project is completely free and is available for anyone to use. :)
