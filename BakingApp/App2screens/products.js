import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function products() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#243748", "#4b749f"]}
        start={{ x: 0, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerItems}>
          <MaterialIcons name="chevron-left" size={24} color="#ddd" />
          <Text style={styles.headerText}>Details</Text>
          <MaterialIcons name="favorite" size={24} color="#ddd" />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./pics/4.png")}
            style={{ height: 400, width: 400, bottom: 10 }}
          ></Image>
        </View>
      </LinearGradient>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text style={styles.body1Text}>Apple Watch SE</Text>
        <Text style={styles.body1Text}>$ 300</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={[
            styles.body1Text,
            { fontSize: 14, color: "#aaa", fontWeight: "400" },
          ]}
        >
          Get help when you need it with Crash Detection, Fall Detection, and
          Emergency SOS. Get deep insights into your health, including
          notifications if you have an irregular rhythm or an unusually high or
          low heart rate.
          <br />
          Available in a range of sizes and colors, with dozens of bands to
          choose from.
        </Text>
        <Text
          style={[
            styles.body1Text,
            { fontSize: 14, color: "red", fontWeight: "400" },
          ]}
        >
          Read more...
        </Text>
        <Text
          style={[
            styles.body1Text,
            { fontSize: 20, marginTop: 20, marginBottom: 20 },
          ]}
        >
          Size
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.sizes}>
            <Text style={styles.sizesText}>
              40mm M/L <br /> fits 150-200mm wrists
            </Text>
          </View>
          <View style={styles.sizes}>
            <Text style={styles.sizesText}>
              40mm S/M <br /> fits 130-180mm wrists
            </Text>
          </View>
          <View style={[styles.sizes, { marginTop: 10 }]}>
            <Text style={styles.sizesText}>
              44mm M/L <br /> fits 160-210mm wrists
            </Text>
          </View>
          <View style={[styles.sizes, { marginTop: 10 }]}>
            <Text style={styles.sizesText}>
              44mm S/M <br /> fits 140-190mm wrists
            </Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <LinearGradient
          colors={["#9d80cb", "#f7c2e6"]}
          start={{ x: 0, y: 1 }}
          style={styles.button}
        >
          <MaterialIcons name="local-grocery-store" size={30} color="#fff" />
          <Text style={styles.headerText}>Shop now</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "40%",
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    fontFamily: "lexend",
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  body1Text: {
    fontFamily: "lexend",
    fontSize: 24,
    fontWeight: "700",
  },
  sizes: {
    backgroundColor: "rgba(170,170,170,0.3)",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  sizesText: {
    fontFamily: "lexend",
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  button: {
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
