import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default function HeaderComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chatting Room</Text>
      <View style={styles.headerIcons}>
        <View>
          <View style={styles.notification}></View>
          <Icon name="bell-outline" size={24} />
        </View>
        <Icon name="magnify" size={24} />
      </View>
    </View>
  );
}

export function ChattingScreenHeaderComponent({ route, navigation }) {
  const user = route.params?.user || {};
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Image source={user.image} style={styles.image} />
        <View>
          <Text style={styles.headerText}>{user.name}</Text>
          <Text style={styles.headerText1}>Online</Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <Icon name="phone" size={24} />
        <Icon name="video-outline" size={24} />
        <Icon name="dots-vertical" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  notification: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 1,
    top: 1,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignSelf: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
    padding: 10,
    alignSelf: "center",
  },
  headerText1: {
    color: "green",
    fontSize: 12,
    paddingLeft: 10,
    bottom: 5,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignSelf: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignSelf: "center",
    left: 10,
  },
});
