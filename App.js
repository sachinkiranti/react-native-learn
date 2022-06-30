import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('sachin')
  const [person, setPerson] = useState({ name: 'mario', age: 40 })

  const clickHandler = () => {
    setName('Sweatas')
    setPerson({
      name: 'Uman',
      age: 50
    })
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler} />
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
    color: 'green'
  },

  buttonContainer: {
    marginTop: 20
  }
});
