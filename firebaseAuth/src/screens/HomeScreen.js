import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { UserContext } from "./UserContext";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { CommonActions } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut(FIREBASE_AUTH);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "SignUp" }],
      })
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Welcome {user ? user.username : "to Home Screen"}
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
  },
});
