import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/6346.jpg")}
        style={styles.logo}
      ></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Say </Text>
        <Text style={[styles.title, styles.strokeText]}>Hello </Text>
        <Text style={styles.title}>to Chatting</Text>
      </View>
      <Text style={styles.description}>
        Connect with friends and family instantly with Hello. Start Chatting
        now!
      </Text>
      <Button
        title="Get Started"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "ChatUsers" }],
            })
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  logo: {
    width: 400,
    height: 300,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#84AEBD",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    paddingHorizontal: 20,
  },
  strokeText: {
    color: "#82d7b3",
    textShadowColor: "#a7a7a7",
    fontSize: 80,
  },
});
