import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ChatInputComponent from "../components/ChatInputComponent";
import SenderMessageComponent from "../components/SenderMessageComponent";
import ReceiverMessageComponent from "../components/ReceiverMessageComponent";
import { ChattingScreenHeaderComponent } from "../components/HeaderComponent";

export default function ChatScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <ChattingScreenHeaderComponent route={route} navigation={navigation} />
      <SenderMessageComponent />
      <ReceiverMessageComponent />
      <SenderMessageComponent />
      <ReceiverMessageComponent />
      <ChatInputComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },
});
