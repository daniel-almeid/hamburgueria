import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Produtos from './Produtos';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { useTema } from '../../contexts/TemaContext';

export default function TelaPrincipal() {
  useEffect(() => {
    hideNavigationBar();
  }, []);

  const hideNavigationBar = () => {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(true);
    }
  };

  const { usuario } = useContext(AutenticacaoContext);
  const navigation = useNavigation();
  const { modoClaro } = useTema(); 

  const irParaConfiguracoes = () => {
    navigation.navigate('Configuracoes');
  };

  const irParaCarrinho = () => {
    navigation.navigate('CarrinhoDeCompras');
  };

  return (
    <View style={[styles.container, { backgroundColor: modoClaro ? '#111' : '#333' }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: modoClaro ? '#fff' : '#fff' }]}>
          Olá, {usuario?.nome || 'Visitante'}
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={irParaCarrinho}>
            <Feather
              name="shopping-cart"
              size={24}
              color={modoClaro ? '#fff' : '#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={irParaConfiguracoes}>
            <MaterialCommunityIcons name="cog" size={24} color={modoClaro ? '#fff' : '#fff'} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Renderize o componente de produtos com o modoClaro */}
      <View style={styles.produtosContainer}>
        <Produtos modoClaro={modoClaro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  produtosContainer: {
    flex: 1,
    paddingBottom: 20,
  },
});
