import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const intialValue = [
  { name: 'Apple', key: '1' },
  { name: 'Banana', key: '2' },
  { name: 'Mango', key: '3' },
  { name: 'Pear', key: '4' },
  { name: 'Grape', key: '5' },
  { name: 'Litchi', key: '6' },
  { name: 'Peach', key: '7' },
  { name: 'Cabbage', key: '8' },
  { name: 'Potato', key: '9' },
]

/**
 * FlatList will directly look for key property
 */

export default function App() {

  const [ fruit, setFruit ] = useState(intialValue)

  return (
    <View style={styles.container}>

      <FlatList
        data={fruit}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
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
    color: 'white'
  }
});
