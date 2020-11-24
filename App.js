import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    alert ('${email} ${senha}');

    fetch('',{
      method : 'POST',
      headers : {
        'contet-type' : 'aplication/json',
        body : {
          email : email,
          senha : senha
        }
      }
    })
    .then(response => response.json())
    .then(data => alert(data));
  }

  return (
    <View style={styles.container}>
      <Text>Hello Word Uillian!</Text>
      
      <Text>Email</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //react onChange={event => setEmail(event.target.value)} 
      onChangeText={text => onChangeText(text)} 
      value={email }
    />
    <Text>Senha</Text>
      <TextInput
      style={{ height: 40, width : 200, borderColor: 'gray', borderWidth: 1 }}
      //react onChange={event => setSenha(event.target.value)} 
      onChangeText={text => onChangeText(text)}
      secureTextEntry={true} 
      value={senha }
      />
      <Button
      onPress={logar}
      title="login"
      color="#841584"
      accessibilityLabel={Login}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
