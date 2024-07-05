import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateMonthlyPayment = () => {
    const loanAmountNum = parseFloat(loanAmount);
    const interestRateNum = parseFloat(interestRate) / 100;
    const loanTermNum = parseFloat(loanTerm);

    const monthlyRate = interestRateNum / 12;
    const monthlyPaymentNum =
      (loanAmountNum * monthlyRate * Math.pow(1 + monthlyRate, loanTermNum)) /
      (Math.pow(1 + monthlyRate, loanTermNum) - 1);

    setMonthlyPayment(monthlyPaymentNum.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Loan Calculator</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          value={loanAmount}
          placeholder="Enter Loan Amount"
          placeholderTextColor={"#F4F4F4"}
          onChangeText={(text) => setLoanAmount(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={interestRate}
          placeholder="Enter Interest Rate (%)"
          placeholderTextColor={"#F4F4F4"}
          onChangeText={(text) => setInterestRate(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={loanTerm}
          placeholder="Enter Loan Term (in months)"
          placeholderTextColor={"#F4F4F4"}
          onChangeText={(text) => setLoanTerm(text)}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          bottom: 30,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          title="Calculate Monthly Payment"
          onPress={calculateMonthlyPayment}
        >
          <Text style={styles.buttonText}>Calculate Monthly Payment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        {monthlyPayment !== "" && (
          <Text style={styles.result}>Monthly Payment: ${monthlyPayment}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
  },
  title: {
    fontFamily: "Lexend",
    fontWeight: "700",
    fontSize: 28,
    padding: 10,
    color: "#F4F4F4",
    marginTop: "15%",
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#6489ac",
    alignItems: "center",
    padding: 10,
  },
  headerBody: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C06C84",
    width: "95%",
    borderRadius: 15,
    margin: 10,
    marginTop: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  body: {
    height: "50%",
    width: "95%",
    backgroundColor: "#486e90",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    left: "2.2%",
    bottom: "10%",
    borderRadius: 50,
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
    width: "85%",
    height: 60,
    borderColor: "#F4F4F4",
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 20,
    color: "#F4F4F4",
    fontFamily: "Lexend",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#486e90",
    width: "70%",
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
    color: "#F4F4F4",
    fontSize: 20,
  },
  footer: {
    width: "100%",
    height: "15%",
    backgroundColor: "#6489ac",
    alignItems: "center",
    padding: 10,
  },
  result: {
    fontFamily: "Lexend",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
    color: "#F4F4F4",
  },
});

export default LoanCalculator;
