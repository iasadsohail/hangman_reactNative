import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class LevelSelection extends Component {
    static navigationOptions = {
        header: false
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.topHeadingContainer}>
                    <Text style={Styles.heading}>Select A Level</Text>
                </View>
                <ScrollView style={Styles.middleLevelContainer}>
                    <TouchableOpacity style={Styles.levelBtn}
                        onPress={() => this.props.navigation.navigate('Level_1')}
                    >
                        <Text style={Styles.levelText}>Level 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelBtn}
                        onPress={() => this.props.navigation.navigate('Level_2')}
                    >
                        <Text style={Styles.levelText}>Level 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.levelBtn}
                        onPress={() => this.props.navigation.navigate('Level_3')}
                    >
                        <Text style={Styles.levelText}>Level 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelBtn}
                        onPress={() => this.props.navigation.navigate('Level_4')}
                    >
                        <Text style={Styles.levelText}>Level 4</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    topHeadingContainer: {
        flex: 2 / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 40,
    },
    middleLevelContainer: {
        flex: 4,
    },
    levelBtn: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15
    },
    levelText: {
        fontSize: 25,
        alignItems: 'center',
    },
});

export default LevelSelection
