import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const bmiResult = weightNum / (heightNum * heightNum);

    setBmi(bmiResult.toFixed(2));

    if (bmiResult < 18.5) {
      setCategory("Underweight");
    } else if (bmiResult < 25) {
      setCategory("Normal weight");
    } else if (bmiResult < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Body Mass Index (BMI)</Text>
        <Text style={[styles.title, { fontSize: 20 }]}>Calculator</Text>
      </View>
      <View style={styles.body}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.label}>Weight (in kg):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Weight"
            placeholderTextColor={"#286400"}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Height (in meters):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Height"
            placeholderTextColor={"#286400"}
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={calculateBmi}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.resultBody}>
        <Text style={styles.result}>Your BMI is: {bmi}</Text>
        <Text style={styles.result}>You are: {category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#4CAF50",
  },
  title: {
    fontFamily: "Lexend",
    fontWeight: "600",
    fontSize: 28,
    padding: 10,
    color: "#286400",
  },
  titleBody: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F7E9",
    width: "95%",
    borderRadius: 15,
    margin: 10,
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
  body: {
    height: "60%",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#E6F7E9",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    width: "50%",
    height: 70,
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
    fontWeight: "400",
    color: "#E6F7E9",
    fontSize: 25,
  },
  label: {
    fontFamily: "Lexend",
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 5,
    color: "#286400",
  },
  input: {
    fontFamily: "Lexend",
    fontWeight: "400",
    fontSize: 18,
    width: "100%",
    height: 60,
    borderColor: "#286400",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#286400",
  },
  result: {
    fontFamily: "Lexend",
    fontWeight: "500",
    fontSize: 24,
    marginTop: 10,
    color: "#286400",
  },
  resultBody: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F7E9",
    width: "95%",
    borderRadius: 15,
    margin: 10,
    padding: 10,
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
});

export default BmiCalculator;
