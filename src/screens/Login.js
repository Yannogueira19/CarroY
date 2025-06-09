import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9AnL2LzYOajK4PH53Wj733waFB8IaIlo',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, returnSecureToken: true }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        let message = 'Erro ao fazer login.';
        if (data.error?.message === 'EMAIL_NOT_FOUND') {
          message = 'Conta não encontrada. Verifique o e-mail digitado.';
        } else if (data.error?.message === 'INVALID_PASSWORD') {
          message = 'Senha incorreta. Tente novamente.';
        } else if (data.error?.message === 'USER_DISABLED') {
          message = 'Essa conta foi desativada pelo administrador.';
        } else if (data.error?.message === 'INVALID_EMAIL') {
          message = 'Formato de e-mail inválido.';
        }
        Alert.alert('Erro', message);
        return;
      }

      await AsyncStorage.setItem('uid', data.localId);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao fazer login. Verifique sua conexão.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ycars</Text>
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: { width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginBottom: 15, backgroundColor: '#fff' },
  button: { width: '100%', height: 50, backgroundColor: '#007bff', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { color: '#007bff', marginTop: 10 },
});

export default Login;
