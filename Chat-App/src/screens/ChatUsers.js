import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import ChatUserComponent from "../components/ChatUserComponent";
import dummyUsers from "../data/dummyUsers";
import HeaderComponent from "../components/HeaderComponent";

export default function ChatUsers({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  const handlePress = (user) => {
    navigation.navigate("ChatScreen", { user });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent />
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item)}>
              <View>
                <ChatUserComponent user={item} />
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.loadingText}>Loading ...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 18,
    color: "grey",
    alignSelf: "center",
  },
});
