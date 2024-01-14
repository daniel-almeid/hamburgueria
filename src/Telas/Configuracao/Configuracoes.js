import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import { useTema } from '../../contexts/TemaContext';

const Configuracoes = () => {
  const navigation = useNavigation();
  const { modoClaro, alternarModo } = useTema();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const switchIcon = modoClaro ? 'sun' : 'moon';

  return (
    <View style={[styles.container, { backgroundColor: modoClaro ? '#222' : '#fff' }]}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#222" barStyle={modoClaro ? 'light-content' : 'dark-content'} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#fff" style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.option, { backgroundColor: modoClaro ? '#fff' : '#222' }]}
          onPress={alternarModo}
        >
          <Feather name={switchIcon} size={24} color={modoClaro ? '#222' : '#fff'} />
          <Text style={[styles.optionText, { color: modoClaro ? '#222' : '#fff', marginLeft: 8 }]}>
            {modoClaro ? 'Modo Claro' : 'Modo Escuro'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#222',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backIcon: {
    marginLeft: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Configuracoes;
