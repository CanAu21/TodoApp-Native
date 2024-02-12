/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Input from './src/components/input';
import {colors} from './src/utils/constant';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  // Add ToDo
  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My Todo App" />
      <Input
        onIconPress={() => Alert.alert('İcona tıkladın')}
        placeholder="deneme"
        hasIcon
        value={text}
        onChangeText={text => setText(text)}
        onIconPress={addTodo}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>ToDo not found</Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            <Text>Todo</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
