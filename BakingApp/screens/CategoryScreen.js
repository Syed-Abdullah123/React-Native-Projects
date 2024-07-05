import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Explore Our Baked Delights</Text>
        <Text style={styles.titleDes}>
          Discover a delightful variety of freshly baked treats, made with love
          and care for you to enjoy.
        </Text>
      </View>
      <Text style={styles.subtitle1}>What would you like to eat?</Text>
      <View style={styles.subtitle2View}>
        <Text style={styles.subtitle2}>Browse by category</Text>
      </View>
      <View style={styles.itemsView}>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/bread.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Breads</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/cake.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Cakes</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/cookies.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Cookies</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/desserts.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Desserts</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/pasteries.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Pasteries</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("ItemsScreen")}>
          <View style={styles.items}>
            <ImageBackground
              source={require("./pics/pies.png")}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.imageText}>Pies</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373951",
  },
  title: {
    fontFamily: "Vegan Style Personal Use",
    fontSize: 25,
    fontWeight: "400",
    letterSpacing: 2,
    color: "#29A0C1",
    marginBottom: 10,
  },
  titleDes: {
    fontFamily: "Alexandria",
    fontSize: 16,
    fontWeight: "300",
    color: "#fff",
    textAlign: "center",
  },
  titleView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#076C8D",
    padding: 10,
    height: 150,
    borderBottomLeftRadius: "60%",
    borderBottomRightRadius: "60%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  },
  subtitle1: {
    fontFamily: "Alexandria",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    color: "#fff",
  },
  subtitle2: {
    fontFamily: "Alexandria",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 0,
    marginBottom: 12,
    padding: 10,
    color: "#fff",
  },
  subtitle2View: {
    backgroundColor: "rgba(41,160,193,0.5)",
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  items: {
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    fontFamily: "Alexandria",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    letterSpacing: 1,
  },
});

export default CategoryScreen;
