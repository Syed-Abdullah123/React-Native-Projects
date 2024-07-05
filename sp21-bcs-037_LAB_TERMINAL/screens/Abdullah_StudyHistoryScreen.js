import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Feather";

const Abdullah_StudyHistoryScreen = ({ navigation }) => {
  const [studyHistory, setStudyHistory] = useState([]);

  useEffect(() => {
    retrieveStudyHistory();
  }, []);

  const retrieveStudyHistory = async () => {
    try {
      const savedStudyHistory = await AsyncStorage.getItem("studyHistory");

      if (savedStudyHistory) {
        setStudyHistory(JSON.parse(savedStudyHistory));
      }
    } catch (error) {
      console.log("Error retrieving study history: ", error);
    }
  };

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.goalText}>{item.goal}</Text>
      <Text style={styles.durationText}>Duration: {item.duration} seconds</Text>
      <Text style={styles.timestampText}>Timestamp: {item.timestamp}</Text>
    </View>
  );

  const handleClearHistory = async () => {
    try {
      setStudyHistory([]);
      await AsyncStorage.removeItem("studyHistory");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              size={24}
              color={"#fff"}
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <View style={{ left: 50 }}>
            <Text style={[styles.label, { padding: 12.5 }]}>
              Your previous history
            </Text>
          </View>
        </View>
      </View>
      {studyHistory.length > 0 ? (
        <FlatList
          data={studyHistory}
          renderItem={renderHistoryItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.historyList}
        />
      ) : (
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.noHistoryText}>No study history available.</Text>
        </View>
      )}
      <View
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button} onPress={handleClearHistory}>
          <Text style={styles.buttonText}>Clear History</Text>
        </TouchableOpacity>
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
  historyList: {
    paddingVertical: 10,
  },
  historyItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  goalText: {
    fontFamily: "Lexend",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#fff",
  },
  durationText: {
    fontFamily: "Lexend",
    fontSize: 16,
    color: "#fff",
    marginBottom: 3,
  },
  timestampText: {
    fontFamily: "Lexend",
    fontSize: 14,
    color: "#fff",
  },
  noHistoryText: {
    fontFamily: "Lexend",
    fontSize: 16,
    color: "#fff",
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    bottom: 40,
  },
  buttonText: {
    fontFamily: "Lexend",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    letterSpacing: 1,
  },
});

export default Abdullah_StudyHistoryScreen;
