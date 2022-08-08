/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform, 
  TextInput,
  TouchableOpacity,
  Keyboard,

} from 'react-native';

import Task from './components/Task';

const App = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setTodoList([...todoList, todo]);
    setTodo(null);
  }

  const handleDelete = (index) => {
    let todoCopy = [...todoList];
    todoCopy.splice(index, 1);
    setTodoList(todoCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.items}>
        {
          todoList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
                <Task key={index} text={item}/>
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTask}>
        <TextInput style={styles.input} placeholder={"Enter something to do"} value={todo} onChangeText={text => setTodo(text)}/>
      
        <TouchableOpacity onPress={() => handleSubmit()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  todoContainer: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    color: 'orange',
    fontSize: 30,

  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 1,
    width: 250,
    color: 'white',

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    borderColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {
    color: 'white',
  },

});

export default App;
