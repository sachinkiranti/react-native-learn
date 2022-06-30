import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Sachin Kiranti')
  const [age, setAge] = useState('28')

  return (
    <View style={styles.container}>
      <Text>My name is {name} and age is {age}.</Text>

      <Text>Enter Name :</Text>

      <TextInput
        multiline
        onChangeText={(val) => setName(val)}
        placeholder='Enter your name e.g. John Doe' 
        style={styles.input} />

      <Text>Enter Age :</Text>

      <TextInput
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)}
        placeholder='Enter your age e.g. 20'
        style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green'
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '95%'
  }
});
