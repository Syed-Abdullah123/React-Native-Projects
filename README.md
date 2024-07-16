# React Native Projects

Welcome to my repository showcasing a collection of React Native applications, each highlighting different aspects of mobile app development using React Native.

## Table of Contents

- [Projects](#projects)
  - [BakingApp](#bakingapp)
  - [Calculator_app](#calculator_app)
  - [NikeApp](#nikeapp)
  - [UI's](#uis)
  - [Expo Firebase Authentication](#firebaseauth)
  - [sp21-bcs-037_LAB_TERMINAL](#sp21-bcs-037_lab_terminal)
  - [Basic Chat App UI](#Chat-App) 
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Usage](#usage)

## Projects

### BakingApp

A user-friendly baking app designed to cater to baking enthusiasts:

- **Welcome Screen**: A welcoming introduction to the app.
- **Home Screen**: Categories of baking recipes for easy navigation.
- **Items Screen**: Detailed list of baking items under each category.

### Calculator_app

An all-in-one calculator app with multiple functionalities:

- **Basic Calculator**: Performs standard arithmetic operations.
- **Scientific Calculator**: Includes advanced mathematical functions.
- **BMI Calculator**: Calculates Body Mass Index.
- **Loan Calculator**: Computes loan repayment details.

### NikeApp

An e-commerce prototype app focusing on Nike products:

- **Product Listings**: Displays a variety of Nike products.
- **Product Details**: Provides detailed information about each product.
- **Cart Management**: Allows users to add and manage products in the cart.
- **State Management**: Utilizes `react-redux` for efficient state management.

### UI's

A collection of various User Interface Designs that were created as a practice for React Native projects.

- **Button Styles**: Different styles and functionalities for buttons.
- **Form Elements**: Includes input fields.
- **Layouts**: Various screen layouts and navigation patterns.

### Expo Firebase Authentication

A project demonstrating Firebase authentication integration in React Native:

- **Sign-Up and Sign-In**: Implements user authentication using Firebase services.
- **Persistent Authentication**: Maintains user sessions with AsyncStorage.
- **Navigation Handling**: Manages navigation flows based on authentication states.

### sp21-bcs-037_LAB_TERMINAL

A project developed for a lab terminal assignment, showcasing:

- **Features**: Demonstrates various React Native capabilities.
- **UI Design**: Focuses on creating an intuitive and engaging user interface.
- **Functionality**: Implements practical features as per assignment requirements.

### Chat-App
A basic user interface for a chat app, contains:

- **Splash Screen**: Provides a brief loading screen with the app logo.
- **Welcome Screen**: Greets the user with a welcome message.
- **Chat Users Screen**: Displays a list of users that can be clicked to initiate a chat.
- **Chat Screen**: Allows users to send and receive messages.

## Screenshots

### BakingApp

<div style="flex-direction: row, gap: 10">
  <img src="UI's/Baking1.png" width="200" />
  <img src="UI's/Baking2.png" width="200" />
  <img src="UI's/Baking3.png" width="200" />
</div>

### Calculator_app

<div style="flex-direction: row, gap: 10">
  <img src="UI's/calculator1.jpeg" width="200" />
  <img src="UI's/calculator2.jpeg" width="200" />
  <img src="UI's/calculator3.jpeg" width="200" />
  <img src="UI's/calculator4.jpeg" width="200" />
</div>

### NikeApp

<div style="flex-direction: row, gap: 10">
  <img src="UI's/Nikeapp1.jpg" width="200" />
  <img src="UI's/Nikeapp2.jpg" width="200" />
  <img src="UI's/Nikeapp3.jpg" width="200" />
</div>

### Basic E-commerce App UI

<div style="flex-direction: row, gap: 10">
  <img src="UI's/E-commerce1.png" width="200" />
  <img src="UI's/E-commerce2.png" width="200" />
</div>

### Expo Firebase Authentication

<div style="flex-direction: row, gap: 10">
  <img src="UI's/firebase1.jpg" width="200" />
  <img src="UI's/firebase2.jpg" width="200" />
  <img src="UI's/firebase3.jpg" width="200" />
  <img src="UI's/firebase4.jpg" width="200" />
  <img src="UI's/firebase5.jpg" width="200" />
</div>

### sp21-bcs-037_LAB_TERMINAL

<div style="flex-direction: row, gap: 10">
  <img src="UI's/Semester-Splash.png" width="200" />
  <img src="UI's/Semester-Signup.png" width="200" />
  <img src="UI's/Semester-Login.png" width="200" />
  <img src="UI's/Semester-Home.png" width="200" />
  <img src="UI's/Semester-Goals.png" width="200" />
  <img src="UI's/Semester-History.png" width="200" />
  <img src="UI's/Semester-Timer.png" width="200" />
</div>

### Chat-App

<div style="flex-direction: row, gap: 10">
  <img src="UI's/Chat1.jpg" width="200" />
  <img src="UI's/Chat2.jpg" width="200" />
  <img src="UI's/Chat3.jpg" width="200" />
  <img src="UI's/Chat4.jpg" width="200" />
</div>

## Libraries and Dependencies
Below are the major libraries and dependencies used across different projects in this repository:

### Dependencies

- [redux](https://redux.js.org/): For state management.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux.
- [react-native-firebase](https://rnfirebase.io/): For authentication and database services.
- [@react-navigation/native](https://reactnavigation.org/): For handling navigation between screens.
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/): For persistent storage.
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/): For creating smooth, powerful, and maintainable animations.
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/): To use customizable vector-icons.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): The official toolset for efficient Redux development.
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient): To create visually appealing backgrounds, buttons, or other UI elements.
  
You can find the complete list of dependencies in the `package.json` file of each project.

## Installation

To run these projects locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Syed-Abdullah123/React-Native-Projects.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd React-Native-Projects
    ```
3. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

To run a specific project, navigate to its directory and start the React Native development server:

```sh
cd <project-name>
npm start
