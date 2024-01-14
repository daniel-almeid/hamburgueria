import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { useTema } from '../../contexts/TemaContext'; 
import { useCarrinho } from '../../contexts/CarrinhoContext';

const produtos = [
  {
    imagem: require('../../imagens/hamburguer-basico.png'),
    texto: 'Hambúrguer básico',
    descricao: 'Delicioso hambúrguer básico, blend 150g acompanhado de queijo cheddar e muito bacon.',
    preco: 25.0,
  },
  {
    imagem: require('../../imagens/hamburguer-da-casa.jpeg'),
    texto: 'Hambúrguer da casa',
    descricao: 'Especialidade da casa, blend 180g acompanhado de salada, muito bacon e molho especial do chefe.',
    preco: 28.50,
  },
  {
    imagem: require('../../imagens/hamburguer-duplo.jpg'),
    texto: 'Hambúrguer Duplo',
    descricao: 'Delicioso hambúrguer de duas carnes, blend de 290g com cebola caramelizada, bacon e duas fatias de cheddar',
    preco: 32.8,
  },
  {
    imagem: require('../../imagens/hamburguer-queijo-empanado.jpeg'),
    texto: 'Hambúrguer com queijo empanado',
    descricao: 'Hamburguer com toque agridoce, blend de 220g com queijo brie empanado e geleia de goiaba',
    preco: 38.9,
  },
  {
    imagem: require('../../imagens/hamburguer-cheddar.png'),
    texto: 'Hambúrguer Cheddar maluco',
    descricao: 'Delicioso hambúrguer com blend de 180g, cheddar exagerado, bacon e molho especial.',
    preco: 30.0,
  },
  {
    imagem: require('../../imagens/hamburguer-frango.png'),
    texto: 'Hambúrguer de Frango',
    descricao: 'Hamburguer com delicioso frango empanado, salada, cream cheese e molho da casa.',
    preco: 34.0,
  },
  {
    imagem: require('../../imagens/hamburguer-onion.jpg'),
    texto: 'Hambúrguer cebolinha',
    descricao: 'CEBOLAAAA, blend de 180g acompanhado de onion rigs, salada, molho da casa e barbecue.',
    preco: 35.0,
  },
  {
    imagem: require('../../imagens/hamburguer-xtudo.jpg'),
    texto: 'Hambúrguer xtudão',
    descricao: 'X-tudão artesanal, blend de 220g acompanhado de salada, queijo, bacon, ovo e dois molhos especiais',
    preco: 36.9,
  },
  {
    imagem: require('../../imagens/hamburguer-2x1.jpg'),
    texto: 'Hambúrguer 2 por 1',
    descricao: 'Dois hambúrgueres especiais no valor de UM! Perfeito para o seu date, rs.',
    preco: 36.0,
  },
  
];


const Produtos = () => {
  const { modoClaro } = useTema();
  const { adicionarAoCarrinho } = useCarrinho();

  const renderItem = ({ item }) => {
    const addToCart = () => { 
      adicionarAoCarrinho(item); 
    };
  
    const backgroundColor = modoClaro ? '#222' : '#FFF';
    const nomeProdutoColor = modoClaro ? '#FFF' : '#000';
    const descricaoProdutoColor = modoClaro ? '#FFF' : '#000';
    const precoProdutoColor = modoClaro ? '#FFF' : '#000';
    const cartIconColor = modoClaro ? '#FFF' : '#000';

    return (
      <View style={[styles.item, { backgroundColor }]}>
        <Image source={item.imagem} style={styles.imagemProduto} />
        <View style={styles.textoProduto}>
          <Text style={[styles.nomeProduto, { color: nomeProdutoColor }]}>{item.texto}</Text>
          <Text style={[styles.descricaoProduto, { color: descricaoProdutoColor }]}>{item.descricao}</Text>
          <Text style={[styles.precoProduto, { color: precoProdutoColor }]}>R$ {item.preco}</Text>
        </View>
        <TouchableOpacity onPress={() => adicionarAoCarrinho(item)}>
          <Feather name="shopping-cart" size={30} color={cartIconColor} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.texto}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1111', // Cor de fundo claro
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricaoProduto: {
    fontSize: 12,
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 14,
  },
});

export default Produtos;