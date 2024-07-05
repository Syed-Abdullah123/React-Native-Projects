import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ThemeSwitch from "./ThemeSwitch";

const HomeScreen = ({ navigation }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleThemeChange = (value) => {
  //   setIsDarkMode(value);
  // };

  // const containerStyle = [styles.container, isDarkMode && styles.darkContainer];
  // const textStyle = [styles.text, isDarkMode && styles.darkText];

  // return (
  //   <View style={containerStyle}>
  //     <Text style={textStyle}>This is some text</Text>
  //     <ThemeSwitch onChange={handleThemeChange} />
  //     {/* Rest of the code */}
  //   </View>
  // );
  //   // You can perform additional logic or state updates based on the theme change
  // };

  return (
    <View style={styles.container}>
      {/* <ThemeSwitch onChange={handleThemeChange} /> */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Harness the power of time to become a productivity wizard
        </Text>
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.boxes}>
            <Text style={styles.label}>Go for a morning walk</Text>
            <Icon name="walking" size={24} color={"#fff"}></Icon>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.label}>Have some Breakfast</Text>
            <Icon name="pizza-slice" size={24} color={"#fff"}></Icon>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.label}>Do some Coding</Text>
            <Icon name="code" size={24} color={"#fff"}></Icon>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GoalSetting_Screen")}
        >
          <View
            style={{
              flex: 1,
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
            <Icon name="chevron-right" size={24} color={"#fff"}></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#434343",
  },
  title: {
    fontFamily: "Lexend",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
  },
  header: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // color: "#434343",
    backgroundColor: "#FFC107",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontFamily: "Lexend",
    fontSize: 24,
    fontWeight: "500",
    // marginBottom: 10,
    color: "#fff",
  },
  boxes: {
    height: "50%",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "Lexend",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    letterSpacing: 1,
    padding: 10,
  },
  darkContainer: {
    backgroundColor: "black", // Dark mode background color
  },
  text: {
    color: "black", // Default text color
  },
  darkText: {
    color: "white", // Dark mode text color
  },
});
