/* ********************* BASIC BAKING APP UI ************************** */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ItemsScreen from "./screens/ItemsScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemsScreen"
          component={ItemsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import shopping from "./App2screens/shopping";
// import products from "./App2screens/products";

// export default function App() {
//   const Stack = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="shopping">
//         <Stack.Screen
//           name="shopping"
//           component={shopping}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="products"
//           component={products}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
