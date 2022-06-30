import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const intialValue = [
  { name: 'Apple', id: '1' },
  { name: 'Banana', id: '2' },
  { name: 'Mango', id: '3' },
  { name: 'Pear', id: '4' },
  { name: 'Grape', id: '5' },
  { name: 'Litchi', id: '6' },
  { name: 'Peach', id: '7' },
  { name: 'Cabbage', id: '8' },
  { name: 'Potato', id: '9' },
]

export default function App() {

  const [ fruit, setFruit ] = useState(intialValue)

  return (
    <View style={styles.container}>
      <ScrollView>
      { 
        fruit && fruit.map((item) => (
          <View style={styles.list} key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )) 
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'black',
    fontSize: 24,
    color: 'white'
  }
});
