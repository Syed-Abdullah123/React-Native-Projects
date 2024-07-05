import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Scientific_Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text style={[styles.resultText, { fontWeight: "500", fontSize: 30 }]}>
          Scientific Calculator
        </Text>
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("C")}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("(")}
        >
          <Text style={[styles.buttonText]}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress(")")}
        >
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("/")}
        >
          <Text style={[styles.buttonText]}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.zeroButton]}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9a88c6" }]}
          onPress={() => handlePress("=")}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B5B95",
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  displayText: {
    fontFamily: "Lexend",
    fontWeight: "600",
    fontSize: 35,
    color: "#F5F5F5",
  },
  resultText: {
    fontFamily: "Lexend",
    fontSize: 60,
    fontWeight: "bold",
    color: "#F5F5F5",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#6B5B95",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  button: {
    width: "23%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#cd7ec7",
  },
  zeroButton: {
    width: "45%",
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonText: {
    fontFamily: "Lexend",
    fontWeight: "400",
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default Scientific_Calculator;
