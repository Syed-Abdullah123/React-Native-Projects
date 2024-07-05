import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Abdullah_GoalSettingScreen from "./screens/Abdullah_GoalSettingScreen";
import Abdullah_StudyHistoryScreen from "./screens/Abdullah_StudyHistoryScreen";
import Abdullah_TimerScreen from "./screens/Abdullah_TimerScreen";
import HomeScreen from "./screens/HomeScreen";
import Abdullah_SplashScreen from "./screens/Abdullah_SplashScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash_Screen">
        <Stack.Screen
          name="Splash_Screen"
          component={Abdullah_SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudyHistory_Screen"
          component={Abdullah_StudyHistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoalSetting_Screen"
          component={Abdullah_GoalSettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Timer_Screen"
          component={Abdullah_TimerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
