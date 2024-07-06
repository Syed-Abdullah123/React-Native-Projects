import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { UserContext } from "./UserContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: username,
      });
      setUser({ username, email: userCredential.user.email });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        })
      );
      // console.log(userCredential.user);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text>Username</Text>
        <TextInput
          placeholder="Enter your user name"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputView}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <Button title="Sign Up" onPress={signUp} disabled={loading} />
      <Button
        title="Already Have an Account"
        onPress={() => navigation.navigate("SignIn")}
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

  inputView: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 65,
    padding: 10,
    elevation: 2,
  },
});
