import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
export default (props: any) => {
  const KEY = 'devio.org';
  const [text, onChangeText] = useState('');
  const [showText, oShowText] = useState('');

  const onSave = async () => {
    try {
      await AsyncStorage.setItem(KEY, text);
    } catch (error) {
      console.log(error);
    }
  };

  const onGet = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY);
      oShowText(value || '');
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}></TextInput>

      <Button title="save" onPress={onSave} />
      <Button title="get" onPress={onGet} />
      <Text>Result: {showText}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
