import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <FontAwesome
                  name="shopping-cart"
                  size={24}
                  color={"#aaa"}
                ></FontAwesome>
                <Text style={{ marginLeft: 5, fontWeight: 500 }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
        ></Stack.Screen>
        <Stack.Screen name="Cart" component={ShoppingCart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
