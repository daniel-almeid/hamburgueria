import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { useTema } from '../../contexts/TemaContext';

const FinalizarCompra = ({ route }) => {
  const { carrinho } = route.params;
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const { usuario } = useContext(AutenticacaoContext);
  const { modoClaro } = useTema();

  const abrirDescricao = (produto) => {
    setProdutoSelecionado(produto);
  };

  const fecharDescricao = () => {
    setProdutoSelecionado(null);
  };

  const toggleDescricao = (produto) => {
    if (produtoSelecionado && produtoSelecionado.texto === produto.texto) {
      fecharDescricao();
    } else {
      abrirDescricao(produto);
    }
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
  };

  return (
    <TouchableWithoutFeedback onPress={fecharDescricao}>
      <ScrollView style={[styles.container, { backgroundColor: modoClaro ? '#111' : '#fff' }]}>
        <View style={[styles.contentContainer, { backgroundColor: modoClaro ? '#111' : '#fff' }]}>
          <Text style={[styles.header, { color: modoClaro ? '#fff' : '#000' }]}>Resumo do pedido</Text>
          <View style={styles.userInfo}>
            <Text style={[styles.userInfoText, { color: modoClaro ? '#fff' : '#000' }]}>
              Nome: {usuario?.nome || 'Nome não disponível'}
            </Text>
            <Text style={[styles.userInfoText, { color: modoClaro ? '#fff' : '#000' }]}>
              Email: {usuario?.email || 'Email não disponível'}
            </Text>
            <Text style={[styles.userInfoText, { color: modoClaro ? '#fff' : '#000' }]}>
              Telefone: {usuario?.telefone || 'Telefone não disponível'}
            </Text>
            <Text style={[styles.userInfoText, { color: modoClaro ? '#fff' : '#000' }]}>
              Endereço: {usuario?.endereco || 'Endereço não disponível'}
            </Text>
          </View>
          {carrinho.map((produto, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleDescricao(produto)}
              activeOpacity={0.7}
            >
              <View style={styles.produtoContainer}>
                <View style={styles.textoProduto}>
                  <Text style={[styles.nomeProduto, { color: modoClaro ? '#fff' : '#000' }]}>{produto.texto}</Text>
                  <Text style={[styles.precoProduto, { color: modoClaro ? '#fff' : '#000' }]}>R$ {produto.preco.toFixed(2)}</Text>
                  {produtoSelecionado && produtoSelecionado.texto === produto.texto && (
                    <TouchableOpacity onPress={fecharDescricao}>
                      <Text style={[styles.descricaoProduto, { color: modoClaro ? '#fff' : '#000' }]}>{produto.descricao}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.totalText}>Valor Total: R$ {calcularTotal()}</Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    position: 'relative',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  produtoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777',
  },
  textoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  precoProduto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  descricaoProduto: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#65B307',
  },
});

export default FinalizarCompra;