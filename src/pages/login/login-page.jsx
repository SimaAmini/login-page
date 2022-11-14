import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../config/colors';

const LoginPage = ({onPressLogin}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.text}>The App!</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={newText => setUserName(newText)}
            defaultValue={userName}
            accessibilityLabel="username"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            accessibilityLabel="password"
          />
          <TouchableOpacity
            onPress={onPressLogin}
            style={styles.loginButton}
            accessibilityLabel="Login button">
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.light,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    flexGrow: 1,
  },
  header: {
    marginBottom: 40,
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
  },
  textInput: {
    borderColor: colors.medium,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
  },
  loginButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    padding: 10,
  },
  loginButtonText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
