import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ConfirmButton, Input, Tips} from '../../common/LoginComponent';
export default (props: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [helpUrl, setHelpUrl] = useState('https://www.baidu.com/');
  const onLogin = () => {};
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Input
          label="用户名"
          placehodler="请输入用户名"
          showLine={true}
          onChangeText={(text: string) => setUserName(text)}
        />

        <Input
          label="密码"
          placehodler="请输入密码"
          secure={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <ConfirmButton title="登录" onClick={onLogin} />
        <Tips msg={msg} helpUrl={helpUrl} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    backgroundColor: '#F1F5F6',
    flexGrow: 1,
  },
});
