import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const image = {
    //uri: "https://wallpaperaccess.com/full/729333.jpg",
    uri: "./assets/bimage.jpg",
};
class MainMenu extends Component {
    static navigationOptions = {
        header: false
    }
    render() {
        return (
            <View style={Styles.container}>
                <ImageBackground source={require('../assets/bimage.jpg')} style={Styles.image}>
                    <Text style={Styles.heading}>HANGMAN</Text>
                    <Text style={Styles.text}>Start</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('GameScreen')}>
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
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",

    },
    heading: {
        fontSize: 40,
        color: "#de9e2c",
        fontWeight: "bold",
        marginBottom: 100
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
export default MainMenu;
