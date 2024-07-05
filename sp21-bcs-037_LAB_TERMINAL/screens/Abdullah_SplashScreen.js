import React, { useRef, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => navigation.replace("HomeScreen"));
  }, [fadeAnim, navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFC107", // set background color to yellow
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#FFC107", // set background color to yellow
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              fontFamily: "signature",
              fontSize: 60,
              fontWeight: "500",
              color: "#fff", // set text color to yellow
              borderBottomColor: "#fff",
              borderBottomWidth: 2,
              letterSpacing: 5,
            }}
          >
            Time Mastery
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
