import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MaterialIcons, Fontisto, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'royalblue', marginBottom: 50, }}>
        Topics
      </Text>
      <View>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <MaterialIcons name="local-movies" size={25} color="pink" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Movies</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <Fontisto name="film" size={25} color="gray" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Seasons</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <MaterialIcons name="sports-basketball" size={25} color="green" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sports</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <Foundation name="quote" size={25} color="red" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Quotes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <Fontisto name="persons" size={25} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Celebrity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}

        >
          <View style={styles.topics}>
            <MaterialCommunityIcons name="dog-side" size={25} color="purple" />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Animals</Text>
          </View>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topics: {
    backgroundColor: '#F48B41',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    padding: 5,
    margin: 10,
  },
});
