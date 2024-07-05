import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  VirtualizedList,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function shopping() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#243748", "#4b749f"]}
      start={{ x: 0, y: 0 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText1}>Hello,</Text>
          <Text style={styles.headerText2}>Abdullah CH</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <MaterialIcons
            name="circle-notifications"
            size={40}
            color="#fff"
            style={{ marginRight: 10 }}
          />
          <Ionicons name="list-circle" size={40} color="#fff" />
        </View>
      </View>
      <View style={styles.input}>
        <MaterialIcons name="search" size={24} color="#aaa" />
        <TextInput
          placeholder="search"
          placeholderTextColor="#aaa"
          style={styles.textInput}
        ></TextInput>
      </View>

      {/* Body */}
      <View style={styles.glass}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={[styles.text, { fontWeight: "700" }]}>
              Apple Smart Watch
            </Text>
            <Text style={[styles.text, { fontSize: 16, color: "#ddd" }]}>
              SE (2ndGen) w/Midnight
            </Text>
            <Text style={[styles.text, { fontSize: 16, color: "#ddd" }]}>
              Aliminium Case
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.text, { fontWeight: "700" }]}>Price: </Text>
              <Text style={styles.text}>$ 300</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <MaterialIcons name="star" size={24} color="orange" />
              <MaterialIcons name="star" size={24} color="orange" />
              <MaterialIcons name="star" size={24} color="orange" />
              <MaterialIcons name="star" size={24} color="orange" />
              <MaterialIcons name="star-half" size={24} color="orange" />
            </View>
            <LinearGradient
              colors={["#9d80cb", "#f7c2e6"]}
              start={{ x: 0, y: 1 }}
              style={styles.glassBtn}
            >
              <MaterialIcons
                name="local-grocery-store"
                size={24}
                color="#fff"
              />
              <Text style={[styles.text, { fontSize: 16 }]}>Shop now</Text>
            </LinearGradient>
          </View>
          <Image
            source={require("./pics/4.png")}
            style={{ width: 220, height: 220 }}
          ></Image>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.brands}>
          <Text style={styles.brandsText}>Movado</Text>
        </View>
        <View style={styles.brands}>
          <Text style={styles.brandsText}>Bulova</Text>
        </View>
        <View style={styles.brands}>
          <Text style={styles.brandsText}>Samsung</Text>
        </View>
        <View style={styles.brands}>
          <Text style={styles.brandsText}>Apple</Text>
        </View>
        <View style={styles.brands}>
          <Text style={styles.brandsText}>Rolex</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={[styles.text, { fontSize: 24, fontWeight: "700" }]}>
          New Arrival
        </Text>
        <View
          style={{
            backgroundColor: "rgba(221,221,221, 0.2)",
            borderRadius: 20,
          }}
        >
          <Text
            style={[styles.text, { padding: 5, color: "white", fontSize: 16 }]}
          >
            See all
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.glass1}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./pics/5.png")}
              style={{ width: 120, height: 120 }}
            ></Image>
          </View>
          <Text style={[styles.text, { fontWeight: "700" }]}>
            Bulova Men's Precisionist
          </Text>
          <Text style={[styles.text, { fontSize: 16, color: "#ddd" }]}>
            Stainless Steel with Black Leather Strap
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star-outline" size={24} color="white" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { fontWeight: "700" }]}>Price: </Text>
            <Text style={styles.text}>$ 205</Text>
          </View>
        </View>
        <View style={styles.glass1}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./pics/6.png")}
              style={{ width: 120, height: 120 }}
            ></Image>
          </View>
          <Text style={[styles.text, { fontWeight: "700" }]}>
            Movado Men's Classic
          </Text>
          <Text style={[styles.text, { fontSize: 16, color: "#ddd" }]}>
            3-Hand Quartz Black Leather Strap
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star" size={24} color="orange" />
            <MaterialIcons name="star-half" size={24} color="orange" />
            <MaterialIcons name="star-outline" size={24} color="white" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { fontWeight: "700" }]}>Price: </Text>
            <Text style={styles.text}>$ 180</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerView}>
        <View style={styles.footer}>
          <View
            style={{
              padding: 10,
              height: 50,
              width: 50,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <FontAwesome name="home" size={30} color="#fff" />
          </View>
          <MaterialIcons name="local-grocery-store" size={30} color="grey" />
          <MaterialIcons name="bookmarks" size={30} color="grey" />
          <MaterialIcons name="favorite-border" size={30} color="grey" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText1: {
    fontFamily: "lexend",
    fontSize: 16,
    fontWeight: "400",
    color: "#ccc",
  },
  headerText2: {
    fontFamily: "lexend",
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  input: {
    height: 45,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
    padding: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "lexend",
    fontSize: 20,
    fontWeight: "400",
    color: "#aaa",
  },
  glass: {
    width: "100%",
    backgroundColor: "rgba(255,250,255,0.1)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    padding: 10,
  },
  glassBtn: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 4,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    flexDirection: "row",
  },
  brands: {
    backgroundColor: "rgba(221,221,221, 0.2)",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  glass1: {
    width: "47.5%",
    backgroundColor: "rgba(255,250,255,0.1)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
    padding: 10,
    marginRight: 20,
  },
  text: {
    fontFamily: "lexend",
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  brandsText: {
    fontFamily: "lexend",
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    padding: 5,
  },
  footerView: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    padding: 25,

    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
