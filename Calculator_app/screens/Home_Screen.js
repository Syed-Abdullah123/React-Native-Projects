import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={{ flex: 1, backgroundColor: "#56373C", padding: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabScreen", { screen: "Basic" })}
        >
          <Text style={Styles.heading}> 1. Basic Calculator</Text>
        </TouchableOpacity>
        <Text style={Styles.paragraph}>
          A versatile tool for performing essential arithmetic operations like
          addition, subtraction, multiplication, and division.
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#F9E07F", padding: 10 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TabScreen", { screen: "Scientific" })
          }
        >
          <Text style={[Styles.heading, { color: "#56373C" }]}>
            {" "}
            2. Scientific Calculator
          </Text>
        </TouchableOpacity>
        <Text style={[Styles.paragraph, { color: "#56373C" }]}>
          An advanced calculator equipped with a wide range of mathematical
          functions and operations. Empowers users to tackle complex
          calculations, equations, and scientific problems with ease.
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#F9AD6A", padding: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabScreen", { screen: "BMI" })}
        >
          <Text style={[Styles.heading, { color: "#56373C" }]}>
            {" "}
            3. BMI Calculator
          </Text>
        </TouchableOpacity>
        <Text style={[Styles.paragraph, { color: "#56373C" }]}>
          A handy tool to assess your body mass index (BMI) and determine if you
          are within a healthy weight range. It calculates your BMI, providing
          insight into your body composition and helping you monitor your
          fitness and overall health goals.
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ff9F5C", padding: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabScreen", { screen: "Loan" })}
        >
          <Text style={Styles.heading}> 4. Loan Calculator</Text>
        </TouchableOpacity>
        <Text style={Styles.paragraph}>
          An essential financial tool that enables you to estimate loan payments
          accurately. This calculator assists in making informed decisions about
          borrowing and managing your finances.
        </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: "Lexend",
    fontSize: 30,
    fontWeight: "600",
    color: "#F4F4F4",
  },
  paragraph: {
    fontFamily: "Lexend",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 20,
    color: "#F4F4F4",
  },
});
