import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';

export class Level_1 extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);
        this.state = {
            inputLetter: '',
            word: '',
            wordList: [
                'mug', 'air', 'pit', 'fun', 'oil', 'oak', 'fox', 'few', 'fog', 'age', 'use', 'sow', 'pen', 'fit', 'car', 'cap',
                'fan', 'flu', 'row', 'nun', 'jaw', 'spy', 'bow', 'pop', 'act', 'rub', 'fix', 'dip', 'rob', 'cup', 'mud', 'jet',
                'cut', 'try', 'bar', 'bin', 'gas', 'pot', 'hit', 'cat', 'ask', 'ear', 'win', 'bus', 'lay', 'due', 'beg', 'gun'
            ],

            correctLetters: [],
            wrongLetters: [],

            firstBoxVal: '',
            secondBoxVal: '',
            thirdBoxVal: '',

            warningMessage: '',
            guessesCount: 0,
            wrongGuesses: 0,

            time: 90
        }
    }

    startGame = () => {
        const min = 0;
        var count = 0;
        this.state.wordList.forEach(element => {
            count++;
        });
        const max = count - 1;
        const rand = Math.round(min + Math.random() * (max - min));

        this.setState({
            word: this.state.wordList[rand],

            inputLetter: '',

            correctLetters: [],
            wrongLetters: [],

            firstBoxVal: '',
            secondBoxVal: '',
            thirdBoxVal: '',

            warningMessage: '',
            guessesCount: 0,
            wrongGuesses: 0,

            time: this.state.time + 1
        }, () => {
            this.setState({
                time: this.state.time - 1
            })
        });
    }

    getIndexes = (arr, val) => {
        var indexes = [];
        var i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }

    inputHandler = text => {
        this.setState({
            guessesCount: this.state.guessesCount + 1
        });
        text = text.toLowerCase();
        var indexes = this.getIndexes(this.state.word, text);

        if (indexes.length == 0) {
            var wrongLettersTemp = this.state.wrongLetters;

            if (wrongLettersTemp.indexOf(text) != '-1') this.setState({ warningMessage: 'Letter Already Guessed Wrong!' });
            else {
                wrongLettersTemp.push(text);
                this.setState({
                    warningMessage: 'Letter Not Matched!',
                    wrongLetters: wrongLettersTemp,
                    wrongGuesses: this.state.wrongGuesses + 1
                });
            }
        } else {
            this.state.correctLetters.push(text);
            indexes.forEach(element => {
                var letterToBeShown = this.state.word[element].toUpperCase();
                this.setState({
                    warningMessage: ''
                });
                switch (element) {
                    case 0:
                        if (this.state.firstBoxVal != '') this.setState({ warningMessage: 'Letter Already Present!' });
                        else this.setState({ firstBoxVal: letterToBeShown }, () => this.checkCompletion());
                        break;
                    case 1:
                        if (this.state.secondBoxVal != '') this.setState({ warningMessage: 'Letter Already Present!' });
                        else this.setState({ secondBoxVal: letterToBeShown }, () => this.checkCompletion());
                        break;
                    case 2:
                        if (this.state.thirdBoxVal != '') this.setState({ warningMessage: 'Letter Already Present!' });
                        else this.setState({ thirdBoxVal: letterToBeShown }, () => this.checkCompletion());
                        break;
                }
            });
        }
    }
    componentDidMount = () => {
        this.startGame();
    }

    checkCompletion = () => {
        if (this.state.firstBoxVal != '' && this.state.secondBoxVal != '' && this.state.thirdBoxVal != '') {
            Alert.alert(
                "You Won!",
                "The Word Was: " + this.state.word + "\nTotal Guesses: " + this.state.guessesCount + "\nWrong Guesses: " + this.state.wrongGuesses,
                [
                    { text: "Play Again", onPress: () => this.startGame() },
                    { text: "Next Level", onPress: () => this.props.navigation.navigate('Level_2') }
                ],
                { cancelable: false }
            );
        }
    }

    timeOver = () => {
        if (this.state.firstBoxVal != '' && this.state.secondBoxVal != '' && this.state.thirdBoxVal != '') { }
        else {
            Alert.alert(
                "You Lost!",
                "Time Over!",
                [
                    { text: "Play Again", onPress: () => this.startGame() },
                    { text: "Next Level", onPress: () => this.props.navigation.navigate('Level_2') }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.gameAreaContainer}>
                    <View style={Styles.gameAreaTextContainer}>
                        <Text style={Styles.gameAreaText}>Guess The Word!</Text>
                    </View>
                    <View>
                        <CountDown
                            size={20}
                            until={this.state.time}
                            onFinish={this.timeOver}
                            digitStyle={{ borderWidth: 0 }}
                            digitTxtStyle={{ color: 'black' }}
                            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                            separatorStyle={{ color: 'black' }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: null, s: null }}
                            showSeparator
                        />
                    </View>
                    <View style={Styles.wordsContainer}>
                        <View style={Styles.wordWrapper}>
                            <Text style={Styles.letterViewArea}>{this.state.firstBoxVal}</Text>
                        </View>
                        <View style={Styles.wordWrapper}>
                            <Text style={Styles.letterViewArea}>{this.state.secondBoxVal}</Text>
                        </View>
                        <View style={Styles.wordWrapper}>
                            <Text style={Styles.letterViewArea}>{this.state.thirdBoxVal}</Text>
                        </View>
                    </View>
                    <Text style={Styles.wrongLetters}>
                        Total Guesses: {this.state.guessesCount}
                    </Text>
                    <Text style={Styles.wrongLetters}>
                        Wrong Guesses: {this.state.wrongGuesses}
                    </Text>
                </View>
                {/* Input Field, Where the User will enter something that he wants to guess */}
                <View style={Styles.inputFieldContainer}>
                    <TextInput
                        style={Styles.inputField}
                        placeholder="Enter Guesses Here"
                        value={this.state.inputLetter}
                        onChangeText={this.inputHandler}
                    ></TextInput>
                    <Text style={Styles.warningMessage}>{this.state.warningMessage}</Text>
                    <TouchableOpacity
                        style={Styles.startOverBtn}
                        onPress={this.startGame}
                    >
                        <Text style={Styles.startOverBtnText}>START OVER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    gameAreaContainer: {
        flex: 4 / 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    gameAreaTextContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    gameAreaText: {
        fontSize: 30,
    },
    wordsContainer: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    wordWrapper: {
        height: '25%',
        width: '15%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterViewArea: {
        textAlign: 'center',
        fontSize: 30
    },
    inputFieldContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputField: {
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 25
    },
    startOverBtn: {
        marginTop: 10,
        backgroundColor: 'black',
        height: 50,
        width: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startOverBtnText: {
        fontSize: 20,
        color: 'white',
    },
    bottomContainer: {
        flex: 2 / 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    wrongLetters: {
        color: 'orange',
        fontSize: 20
    },
    warningMessage: {
        color: 'red',
        fontSize: 20,
    }
});

export default Level_1
