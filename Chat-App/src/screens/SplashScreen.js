import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { CommonActions } from "@react-navigation/native";

export default function SplashScreen({ navigation }) {
  const logoPosition = useRef(new Animated.ValueXY({ x: 0, y: -300 })).current;

  useEffect(() => {
    // Function to animate logo drop and navigate after delay
    const animateLogo = () => {
      Animated.timing(logoPosition, {
        toValue: { x: 0, y: 0 },
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(logoPosition, {
            toValue: { x: 0, y: 300 },
            duration: 1000, // Adjust duration as needed
            useNativeDriver: true,
          }).start(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "WelcomeScreen" }],
              })
            ); // Replace 'NextScreen' with your actual screen name
          });
        }, 2000); // Delay before moving logo down
      });
    };

    animateLogo(); // Call the animation function when component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/splash-logo.png")}
        style={[styles.logo, { transform: [{ translateY: logoPosition.y }] }]}
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
  },
  logo: {
    width: 200,
    height: 100,
  },
});
