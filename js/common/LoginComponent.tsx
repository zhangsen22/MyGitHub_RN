import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Input = (props: any) => {
  const {label, placehodler, showLine, secure, onChangeText} = props;
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={styles.row}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placehodler}
          secureTextEntry={secure}
          //取消大小写
          autoCapitalize={'none'}
          onChangeText={onChangeText}
        />
      </View>
      <View
        style={{
          height: 0.5,
          backgroundColor: '#D0D4D4',
          marginLeft: showLine ? 20 : 0,
        }}
      />
    </View>
  );
};

export const ConfirmButton = (props: any) => {
  const {title, onClick} = props;
  return (
    <TouchableOpacity style={styles.confirmButton} onPress={onClick}>
      <Text style={styles.confirmText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Tips = (props: any) => {
  const {msg, helpUrl} = props;
  return (
    <View style={styles.tipLayout}>
      <Text style={styles.tip}>{msg}</Text>
      {!!helpUrl && (
        <Text
          style={{color: 'green'}}
          onPress={() => {
            Linking.openURL(helpUrl);
          }}>
          查看帮助
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputLabel: {
    marginLeft: 15,
    marginTop: 18,
    marginBottom: 18,
    fontSize: 16,
    width: 90,
  },
  input: {
    flex: 1,
    marginEnd: 15,
  },
  confirmButton: {
    backgroundColor: '#2196f3',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    marginTop: 30,
    borderRadius: 5,
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 20,
  },
  tipLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tip: {
    fontSize: 14,
    color: 'red'
  },
});
