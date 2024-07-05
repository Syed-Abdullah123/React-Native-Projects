import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";

const GoalSettingScreen = ({ navigation }) => {
  const [goal, setGoal] = useState("");
  const [timer, setTimer] = useState("");
  const [goalList, setGoalList] = useState([]);

  const handleGoalSubmit = () => {
    if (goal && timer) {
      const newGoal = { id: Date.now().toString(), goal, timer };
      setGoalList((prevList) => [...prevList, newGoal]);
      setGoal("");
      setTimer("");
    } else {
      console.log("Please enter a goal and timer duration.");
    }
  };

  const handleGoalPress = (goal, timer) => {
    navigation.navigate("Timer_Screen", { goal, timer });
  };

  const renderGoalItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleGoalPress(item.goal, item.timer)}>
      <View style={styles.goalItem}>
        <View>
          <Text style={styles.goalItemText}>
            {item.goal} for {item.timer} minutes
          </Text>
        </View>
        {/* <View style={{ left: 40 }}> */}
        <View>
          <Icon name="edit-3" size={24} color={"#fff"}></Icon>
        </View>
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );

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
            <Text style={[styles.label, { padding: 12.5 }]}>Add new goals</Text>
          </View>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.label}>Goal:</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.input}
            value={goal}
            onChangeText={setGoal}
            placeholder="Enter your goal"
          />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.label}>Timer (in minutes):</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.input}
            value={timer}
            onChangeText={setTimer}
            placeholder="Enter timer duration"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleGoalSubmit}>
            <Text style={styles.buttonText}>Set Goal</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={goalList}
            renderItem={renderGoalItem}
            keyExtractor={(item) => item.id}
            style={styles.goalList}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          bottom: "5%",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StudyHistory_Screen")}
        >
          <Text style={styles.buttonText}>Check History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TimerScreen = ({ route }) => {
  const { goal, timer } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.timerLabel}>{goal}</Text>
      <Text style={styles.timer}>{timer} minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1C1C1C",
  },
  label: {
    fontFamily: "Lexend",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    color: "#fff",
  },
  input: {
    width: "90%",
    height: 50,
    color: "#fff",
    fontFamily: "Lexend",
    letterSpacing: 1,
    backgroundColor: "#434343",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
  },
  goalList: {
    marginTop: 20,
    width: "80%",
    borderBottomColor: "#434343",
    borderBottomWidth: 2,
  },
  goalItem: {
    marginTop: 15,
    marginBottom: 10,
    height: "75%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#434343",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  goalItemText: {
    fontFamily: "Lexend",
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    marginRight: 20,
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
  },
  buttonText: {
    fontFamily: "Lexend",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    letterSpacing: 1,
  },
});

export default GoalSettingScreen;
