import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constant';

const Todo = ({todo = {}, todos = [], setTodos = {}}) => {
  /* Todo Delete */
  const deleteTodo = () => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete the todo with the ID: ${todo?.id}`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const filteredTodos = todos.filter(item => item.id !== todo.id);
            setTodos(filteredTodos);
          },
          style: 'cancel',
        },
      ],
    );
  };

  /* Todo Green Tik */
  const changeCompleted = () => {
    Alert.alert('Done', 'Are you sure you want to mark the ToDo as done?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Check',
        onPress: () => {
          const tempArray = [];
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id) {
              tempArray.push(todos[i]);
            } else {
              const newTodo = {
                ...todo,
                completed: !todo.completed,
              };
              tempArray.push(newTodo);
            }
          }
          setTodos(tempArray);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('en-EN')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
