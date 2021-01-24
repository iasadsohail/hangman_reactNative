import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const image = {
  uri: "https://wallpaperaccess.com/full/729333.jpg",
};
function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground source={image} style={Styles.image}>
        <Text style={Styles.heading}>GAME NAME</Text>
        <Text style={Styles.text}>Start</Text>
        <TouchableOpacity>
          <Ionicons
            name="play-circle-outline"
            size={100}
            color="#375403"
          ></Ionicons>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 70,
    color: "#de9e2c",
    fontWeight: "bold",
    // alignSelf: "flex-start",
    marginBottom: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    alignItems: "center",
    color: "#5a7b1d",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default App;
