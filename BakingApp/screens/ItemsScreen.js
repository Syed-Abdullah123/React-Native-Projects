import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ItemsScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          backgroundColor: "rgba(41,160,193,0.5)",
          marginBottom: 20,
          borderBottomColor: "#29A0C1",
          borderBottomWidth: 5,
          borderBottomLeftRadius: "20%",
          borderBottomRightRadius: "20%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
        }}
      >
        <Text style={styles.title}>Explore Our Delicious Selection</Text>
        <Text style={styles.subtitle}>
          Browse through our mouthwatering items
        </Text>
      </View>
      {/* Breads */}
      <View style={styles.itemsView}>
        <Text style={styles.breadsText}>Breads</Text>
        {/* item #01 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Image
            source={require("./pics/breads/Baguette.jpg")}
            style={styles.image}
          ></Image>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.itemName}>Baguette Bread</Text>
            <Text style={styles.itemDetails}>Price: 70$</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* item #02 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Image
            source={require("./pics/breads/Sourdough.jpg")}
            style={styles.image}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.itemName}>Sourdough Bread</Text>
            <Text style={styles.itemDetails}>Price: 100$</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ color: "red", fontSize: 16 }}>View More</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Cakes */}
      <View style={styles.itemsView}>
        <Text style={styles.breadsText}>Cakes</Text>
        {/* item #01 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Image
            source={require("./pics/cakes/Carrot Cake.jpg")}
            style={styles.image}
          ></Image>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.itemName}>Carrot Cake</Text>
            <Text style={styles.itemDetails}>Price: 200$</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* item #02 */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Image
            source={require("./pics/cakes/Chocolate Truffle.jpg")}
            style={styles.image}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.itemName}>Chocolate Truffle</Text>
            <Text style={styles.itemDetails}>Price: 300$</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ color: "red", fontSize: 16 }}>View More</Text>
          </TouchableOpacity>
        </View>
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
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Alexandria",
    fontSize: 16,
    marginBottom: 20,
    color: "#29A0C1",
    textAlign: "center",
  },
  itemsView: {
    padding: 10,
    backgroundColor: "rgba(41,160,193,0.5)",
    marginBottom: 20,
    borderTopColor: "#29A0C1",
    borderBottomColor: "#29A0C1",
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopLeftRadius: "5%",
    borderTopRightRadius: "5%",
    borderBottomLeftRadius: "5%",
    borderBottomRightRadius: "5%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },
  breadsText: {
    fontFamily: "Alexandria",
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 10,
    color: "#29A0C1",
  },
  itemName: {
    fontFamily: "Alexandria",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#29A0C1",
  },
  itemDetails: {
    fontFamily: "Alexandria",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    color: "#29A0C1",
  },
  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#29A0C1",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#076C8D",
    width: 170,
  },
  buttonText: {
    fontFamily: "Alexandria",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 1,
  },
});

export default ItemsScreen;
