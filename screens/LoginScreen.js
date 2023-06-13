import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import MainButton from '../components/ui/MainButton';
import AppHeader from '../components/ui/AppHeader';
import Colors from '../utilities/constants/colors';

const LoginScreen = ({ onLogin }) => {
  // States
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserNameHandler = (value) => {
    setUserName(value);
  };

  const onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  const onResetLoginHandler = () => {
    setUserName('');
  };
  const onLoginHandler = () => {
    if (userName.trim().length === 0 || password.trim().length === 0) {
      Alert.alert('Felmeddelande', 'Användarnamn och lösen måste anges!', [
        { text: 'OK', style: 'default', onPress: onResetLoginHandler },
      ]);
      return;
    }
    onLogin(true);
  };
  const onRegisterHandler = () => {
    console.log('Klickat på Registrera');
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <View>
        <Text style={styles.titleText}>Vänligen logga in</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userNameInput}
          placeholder="E-Post"
          placeholderTextColor={'#a5a5a5'}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={onChangeUserNameHandler}
        />
        <TextInput
          style={styles.userNameInput}
          placeholder="Lösenord"
          placeholderTextColor={'#a5a5a5'}
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePasswordHandler}
        />
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onLoginHandler}>Logga in</MainButton>

          <MainButton onPressed={onRegisterHandler}>Registrera</MainButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  userNameInput: {
    height: 28,
    fontSize: 16,
    borderColor: '#ddb52f',
    borderBottomWidth: 1,
    paddingVertical: 4,
    marginVertical: 6,
    color: '#ddb52f',
  },
  inputContainer: {
    backgroundColor: '#611313',
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  titleText: {
    color: Colors.lightText,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.lightText,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
});
