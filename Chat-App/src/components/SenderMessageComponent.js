import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SenderMessageComponent() {
  return (
    <View style={styles.container}>
      <Text>I don't think I can join later in the afternoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: 10,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: "auto",
    padding: 15,
    backgroundColor: "lightgreen",
    borderRadius: 30,
    borderWidth: 2,
    borderBottomEndRadius: 0,
    marginTop: 10,
  },
});
