import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { useNavigation } from '@react-navigation/native';
import { useTema } from '../../contexts/TemaContext'; // Importe o hook useTema

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AutenticacaoContext);
  const { modoClaro } = useTema();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const resultado = await login(email, senha);
    if (resultado === 'ok') {
      navigation.navigate('TelaPrincipal');
    } else {
      alert(resultado);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: modoClaro ? '#222' : '#fff' }]}>
      <Image
        source={require('../../imagens/logo-hamburgueria.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: modoClaro ? '#f5f5f5' : '#222', fontSize: 32, fontWeight: 'bold' }]}>
        Bem-vindo!
      </Text>
      <TextInput
        style={[styles.input, { color: modoClaro ? '#fff' : '#222', borderColor: modoClaro ? '#f5f5f5' : 'black' }]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor={modoClaro ? '#fff' : '#222'}
      />
      <TextInput
        style={[styles.input, { color: modoClaro ? '#fff' : '#222', borderColor: modoClaro ? '#f5f5f5' : 'black' }]}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry // Isso oculta o texto digitado
        placeholderTextColor={modoClaro ? '#fff' : '#222'}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: modoClaro ? 'black' : '#FFA844' }]} onPress={handleLogin}>
        <Text style={[styles.buttonText, { color: modoClaro ? 'white' : 'black' }]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LoginScreen;
