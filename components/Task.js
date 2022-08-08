import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circle}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: 'gray',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    maxWidth: '99%',

  },
  circle: {
    width: 12,
    height: 12,
    marginRight: 5,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },

});

export default Task;