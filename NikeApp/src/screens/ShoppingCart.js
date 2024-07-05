import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";
// import cart from "../data/cart";

const ShopingCartTotals = () => {
  const Subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>$USD {Subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$USD {deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>$USD {total}</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item}></CartListItem>}
        ListFooterComponent={ShopingCartTotals}
      ></FlatList>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  totalContainer: {
    paddingTop: 10,
    margin: 20,
    borderColor: "#ccc",
    borderTopWidth: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "#aaa",
  },
  textBold: {
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#000",
    width: "95%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default ShoppingCart;
