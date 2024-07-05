import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Basic_Calculator from "./screens/Basic_Calculator";
import BMI_Calculator from "./screens/BMI_Calculator";
import Loan_Calculator from "./screens/Loan_Calculator";
import Scientific_Calculator from "./screens/Scientific_Calculator";
import HomeScreen from "./screens/Home_Screen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Basic" component={Basic_Calculator} />
      <Tab.Screen name="Scientific" component={Scientific_Calculator} />
      <Tab.Screen name="BMI" component={BMI_Calculator} />
      <Tab.Screen name="Loan" component={Loan_Calculator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
