/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';

function App() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text>Todo App week1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
