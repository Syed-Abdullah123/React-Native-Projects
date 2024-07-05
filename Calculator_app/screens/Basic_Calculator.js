import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Basic_Calculator = () => {
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const addition = () => {
    const total = parseFloat(num1) + parseFloat(num2);
    setResult(total.toString());
  };

  const subtraction = () => {
    const total = parseFloat(num1) - parseFloat(num2);
    setResult(total.toString());
  };

  const division = () => {
    const total = parseFloat(num1) / parseFloat(num2);
    setResult(total.toString());
  };

  const multiplication = () => {
    const total = parseFloat(num1) * parseFloat(num2);
    setResult(total.toString());
  };

  const clearInput = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Basic Calculator</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.view1}>
          <TextInput
            style={styles.input}
            activeOutlineColor="#FFFFFF"
            placeholder="Enter first number"
            placeholderTextColor={"#FFFFFF"}
            value={num1}
            keyboardType="numeric"
            onChangeText={setNum1}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter second number"
            placeholderTextColor={"#FFFFFF"}
            value={num2}
            keyboardType="numeric"
            onChangeText={setNum2}
          />
          <View
            style={{
              flexDirection: "row",
              padding: 10,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { marginHorizontal: 10 }]}
              onPress={addition}
            >
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginHorizontal: 10 }]}
              onPress={subtraction}
            >
              <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginHorizontal: 10 }]}
              onPress={multiplication}
            >
              <Text style={styles.buttonText}> * </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginHorizontal: 10 }]}
              onPress={division}
            >
              <Text style={styles.buttonText}> / </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            top: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { width: 200 }]}
            onPress={clearInput}
          >
            <Text style={styles.buttonText}> Clear All </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.view1, { height: "20%", marginTop: 40 }]}>
          <Text style={styles.resultText}>Result: {result}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006c66",
  },
  title: {
    fontFamily: "Lexend",
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
    margin: 10,
    marginBottom: 20,
  },
  view1: {
    backgroundColor: "#005651",
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: "30%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: "90%",
    height: 50,
    color: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Lexend",
    letterSpacing: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "Lexend",
    fontWeight: "300",
    color: "#006c66",
    fontSize: 25,
  },
  resultText: {
    fontFamily: "Lexend",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 50,
  },
});

export default Basic_Calculator;
