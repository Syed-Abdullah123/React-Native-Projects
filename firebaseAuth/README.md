# Firebase Authentication App

This project is a React Native application that demonstrates Firebase Authentication. The application is built with React Native and uses Firebase for user authentication, including sign-in and sign-up functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [Authentication Flow](#authentication-flow)
- [User Context](#user-context)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Syed-Abdullah123/React-Native-Projects.git
    cd React-Native-Projects/firebaseAuth
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Firebase:**
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project or use an existing project.
    - Add a web app to your firebase project.

4. **Run the application:**
    ```bash
    npx expo start # to start the development server
    ```

## Usage

Once the application is up and running, you can register a new account or log in with an existing account using Firebase Authentication.

## Features

- **User Registration:** Create a new account with email and password.
- **User Login:** Sign in with an existing account.
- **Persistent Login State:** Stay logged in across app restarts using Firebase Authentication.

## Screenshots

Include some screenshots of your app here to give a visual overview. You can upload images to your repository and reference them like this:

![Login Screen](./assets/screenshots/login.png)
![Registration Screen](./assets/screenshots/registration.png)

## Dependencies

The project relies on several libraries and modules. Here are the main dependencies:

- `react`
- `react-native`
- `firebase`
- `react-native-firebase`

You can find the complete list of dependencies in the `package.json` file.

## Authentication Flow

The project uses Firebase Authentication for handling user sign-in and sign-up. Here is a brief overview of the authentication flow:

1. **Firebase Configuration:**

    Configure Firebase in your `firebaseConfig.js` file:
    ```javascript
    import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export { auth };
    ```

2. **User Registration:**

    Handle user registration in your component:
    ```javascript
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth } from './firebase';

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('User registered: ', user);
            })
            .catch(error => {
                console.error('Error registering user: ', error);
            });
    };
    ```

3. **User Login:**

    Handle user login in your component:
    ```javascript
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from './firebase';

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('User logged in: ', user);
            })
            .catch(error => {
                console.error('Error logging in user: ', error);
            });
    };
    ```

## User Context

The project uses a `UserContext` to manage and provide the authenticated user's state throughout the application. Here is an overview of how `UserContext` is implemented:

1. **Creating User Context:**

    Create a `userContext.js` file to set up the context:
    ```javascript
    import React, { createContext, useState, useContext } from 'react';

    const UserContext = createContext();

    export const UserProvider = ({ children }) => {
        const [user, setUser] = useState(null);

        return (
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        );
    };

    export const useUser = () => useContext(UserContext);
    ```

2. **Providing User Context:**

    Wrap your main application component with the `UserProvider` in `App.js`:
    ```javascript
    import React from 'react';
    import { UserProvider } from './userContext';
    import MainNavigator from './navigation/MainNavigator';

    const App = () => {
        return (
            <UserProvider>
                <MainNavigator />
            </UserProvider>
        );
    };

    export default App;
    ```

3. **Using User Context in Components:**

    Access the authenticated user state in your components:
    ```javascript
    import React from 'react';
    import { useUser } from '../userContext';

    const HomeScreen = () => {
        const { user, setUser } = useUser();

        return (
            <View>
                <Text>Welcome, {user ? user.email : 'Guest'}</Text>
            </View>
        );
    };

    export default HomeScreen;
    ```

## Contributing

Contributions are welcome! If you have any ideas or suggestions to improve this project, feel free to open an issue or submit a pull request.

## Acknowledgements

This project would not have been possible without the guidance and tutorials provided by [Code with Beto](https://codewithbeto.dev/). Check out their YouTube channel and website for more resources:

- YouTube: [Code with Beto YouTube Channel](https://www.youtube.com/results?search_query=code+with+beto)
- Website: [Code with Beto](https://codewithbeto.dev/)

## License

This project is completely free to use. :)
