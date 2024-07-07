import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { UserContext } from "./UserContext";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const SignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      const username = user.displayName || "User";
      setUser({ username, email: user.email });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={SignIn} disabled={loading} />
      <Button
        title="Create a new Account"
        onPress={() => navigation.navigate("SignUp")}
        disabled={loading}
      />
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
    paddingHorizontal: 20,
  },

  input: {
    width: "100%",
    height: 65,
    padding: 10,
    elevation: 2,
  },
});
