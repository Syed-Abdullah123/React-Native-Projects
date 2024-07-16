import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
export default function Button(props) {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
        <Image
          source={require("../../assets/images/arrow-right.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#d6d6d6",
    margin: 10,
  },
  container: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    width: "98%",
    alignSelf: "center",
    bottom: 5,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: "#82d7b3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
});
