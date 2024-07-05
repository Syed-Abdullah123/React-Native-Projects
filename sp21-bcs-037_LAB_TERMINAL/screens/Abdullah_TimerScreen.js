import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  // AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Abdullah_TimerScreen = ({ navigation, route }) => {
  const [timer, setTimer] = useState(47 * 60); // Default timer of 47 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (route.params && route.params.timer) {
      const parsedTimer = parseInt(route.params.timer) * 60;
      setTimer(parsedTimer);
    }
  }, [route.params]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleStopTimer = async () => {
    setIsRunning(false);

    try {
      // Retrieve study history from AsyncStorage
      const savedStudyHistory = await AsyncStorage.getItem("studyHistory");
      let studyHistory = [];

      if (savedStudyHistory) {
        studyHistory = JSON.parse(savedStudyHistory);
      }

      // Create a new history item
      const newHistoryItem = {
        goal: route.params.goal,
        duration: parseInt(route.params.timer) * 60 - timer,
        timestamp: new Date().toLocaleString(),
      };

      // Add the new history item to the study history array
      studyHistory.push(newHistoryItem);

      // Save the updated study history to AsyncStorage
      await AsyncStorage.setItem("studyHistory", JSON.stringify(studyHistory));
    } catch (error) {
      console.log("Error saving study history: ", error);
    }
  };

  const handleResetTimer = () => {
    const initialTimer = route.params ? parseInt(route.params.timer) * 60 : 0;
    setTimer(initialTimer);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={24}
            color={"#fff"}
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <View style={{ left: 50 }}>
          <Text style={[styles.label, { padding: 12.5 }]}>Set your timer</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.timerView}>
          <Text style={styles.timer}>{formatTime(timer)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { flex: 1 }]}
            onPress={isRunning ? handleStopTimer : handleStartTimer}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name={isRunning ? "pause-circle" : "play-circle"}
                size={30}
                color="#fff"
              />
              <Text style={styles.buttonText}>
                {isRunning ? "Stop" : "Start"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { flex: 1, backgroundColor: "#434343" }]}
            onPress={handleResetTimer}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="rotate-ccw" size={30} color="#fff" />
              <Text style={styles.buttonText}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  label: {
    fontFamily: "Lexend",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    color: "#fff",
  },
  timer: {
    fontFamily: "Lexend",
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
  },
  timerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: "80%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#434343",
    color: "#fff",
  },
  button: {
    width: 130,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    margin: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "Lexend",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    letterSpacing: 1,
  },
});

export default Abdullah_TimerScreen;
