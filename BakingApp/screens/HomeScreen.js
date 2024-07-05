// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <ImageBackground
//       source={require("./Bake Connect.png")}
//       style={styles.container}
//     >
//       <View style={styles.btnView}>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => navigation.navigate("CategoryScreen")}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               padding: 10,
//               alignItems: "center",
//             }}
//           >
//             <Text style={styles.btnText}>Browse our Delights</Text>
//             <MaterialIcons
//               name="chevron-right"
//               size={24}
//               color={"#FDF7F8"}
//               style={{ padding: 5, marginTop: 3 }}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   btnView: {
//     position: "absolute",
//     bottom: 25,
//     left: 130,
//     right: 0,
//     alignItems: "center",
//   },
//   btn: {
//     backgroundColor: "rgba(253,247,248,0.3)",
//     borderRadius: 10,
//     // borderWidth: 3,
//     // borderColor: "#FDF7F8",
//   },
//   btnText: {
//     fontFamily: "lexend",
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#FDF7F8",
//   },
// });

// export default HomeScreen;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./Bake Connect1.png")}
      style={styles.container}
    >
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("CategoryScreen")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
            }}
          >
            <Text style={styles.btnText}>Browse our Delights</Text>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color={"#FDF7F8"}
              style={{ padding: 5, marginTop: 3 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnView: {
    position: "absolute",
    bottom: 25,
    left: 130,
    right: 0,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "rgba(41,160,193,0.5)",
    borderRadius: 10,
    // borderWidth: 3,
    // borderColor: "#FDF7F8",
  },
  btnText: {
    fontFamily: "lexend",
    fontSize: 16,
    fontWeight: "500",
    color: "#FDF7F8",
  },
});

export default HomeScreen;
