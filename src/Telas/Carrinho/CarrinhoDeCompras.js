import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { useTema } from '../../contexts/TemaContext';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import { useNavigation } from '@react-navigation/native';


const CarrinhoItem = ({ produto }) => {
  const { modoClaro } = useTema();
  const { removerDoCarrinho } = useCarrinho();

  const backgroundColor = modoClaro ? '#222' : '#f0f9ff';
  const nomeProdutoColor = modoClaro ? '#FFF' : '#000';
  const precoProdutoColor = modoClaro ? '#FFF' : '#000';

  const handleRemover = () => {
    removerDoCarrinho(produto);
  };

  return (
    <View style={[styles.item, { backgroundColor }]}>
      <Image source={produto.imagem} style={styles.imagemProduto} />
      <View style={styles.textoProduto}>
        <Text style={[styles.nomeProduto, { color: nomeProdutoColor }]}>{produto.texto}</Text>

        <Text style={[styles.precoProduto, { color: precoProdutoColor }]}>R$ {produto.preco}</Text>
      </View>
      <TouchableOpacity style={styles.botaoRemover} onPress={handleRemover}>
        <Feather name="trash-2" size={24} color={modoClaro ? '#C3002C' : '#C3002C'} />
      </TouchableOpacity>
    </View>
  );
};

const Carrinho = () => {
  const { modoClaro } = useTema();
  const { carrinho } = useCarrinho();
  const navigation = useNavigation();

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
  };

  const finalizarCompra = () => {
    navigation.navigate('FinalizarCompra', { carrinho });
  };

  return (
    <View style={{ flex: 1, backgroundColor: modoClaro ? '#111' : '#FFF' }}>
      <ScrollView contentContainerStyle={[styles.container]}>
        <Text style={[styles.header, { color: modoClaro ? '#fff' : '#111' }]}>Meu Carrinho</Text>
        {carrinho.map((produto, index) => (
          <CarrinhoItem key={index} produto={produto} />
        ))}
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: modoClaro ? '#111' : '#FFF' }]}>
        <TouchableOpacity style={styles.botaoTotal}>
          <Text style={styles.textoTotal}>Total: R$ {calcularTotal()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFinalizar} onPress={finalizarCompra}>
          <Text style={styles.textoFinalizar}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  imagemProduto: {
    width: 100,
    height: 95,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  },
  textoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricaoProduto: {
    fontSize: 12,
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  botaoRemover: {
    padding: 5,
  },
  botaoTotal: {
    backgroundColor: '#009387',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  textoTotal: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  botaoFinalizar: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoFinalizar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
});

export default Carrinho;
