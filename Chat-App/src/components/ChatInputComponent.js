import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

export default function ChatInputComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/smile.png")}
          style={styles.image}
        />
        <View>
          <TextInput placeholder="Type a message..." style={styles.input} />
        </View>
        <Image
          source={require("../../assets/images/camera.png")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/attach-file.png")}
          style={styles.image}
        />
        <View style={styles.micView}>
          <Image
            source={require("../../assets/images/microphone (1).png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "90%",
    height: 70,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "black",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#eee",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  micView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginLeft: 9,
  },
});
