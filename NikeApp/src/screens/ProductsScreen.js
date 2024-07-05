import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
// import products from "../data/products";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              // update selected products
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("Product Details");
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image}></Image>
          </Pressable>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
