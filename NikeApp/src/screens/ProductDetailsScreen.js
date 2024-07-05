import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View,
  useWindowDimensions,
  processColor,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={{ width, aspectRatio: 1 }}
              ></Image>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={addToCart} style={styles.button}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  price: {
    fontWeight: "bold",
    letterSpacing: 1,
  },
  description: {
    lineHeight: 25,
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

export default ProductDetailsScreen;
