import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

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

/**
 * FlatList will directly look for key property
 */

export default function App() {

  const [ fruit, setFruit ] = useState(intialValue)

  const pressHandler = (id) => setFruit((prevFruit) => {
    return prevFruit.filter(fruit => fruit.id !== id)
  })

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={fruit}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    color: 'white',
    marginHorizontal: 10,
  }
});
