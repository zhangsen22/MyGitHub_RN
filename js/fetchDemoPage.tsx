import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {get, post} from './HiNet';
import Constants from './expend/dao/Constants';
export default (props: any) => {
  const [msg, setMsg] = useState('');
  const doFetch = () => {
    //     fetch('https://api.devio.org/uapi/test/test?requestPrams=RN')
    //     .then(res => res.json())
    //     .then(result => {
    //         setMsg(JSON.stringify(result))
    //     }).catch(e => {
    //         console.log(e)
    //         setMsg(JSON.stringify(e))
    //     })

    // get(Constants.test.api)({requestPrams: 'hello RN'})
    //   .then(result => {
    //     setMsg(JSON.stringify(result));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     setMsg(JSON.stringify(error));
    //   });
    const formData = new FormData();
    formData.append("requestPrams", 'hello post RN');
    post(Constants.test.api)(formData)()
      .then(result => {
        setMsg(JSON.stringify(result));
      })
      .catch(error => {
        console.log(error);
        setMsg(JSON.stringify(error));
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={doFetch}>
        <Text>加载</Text>
        <Text>{msg}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
