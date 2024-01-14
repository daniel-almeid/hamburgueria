import React, { createContext, useState, useContext } from 'react';

const CarrinhoContext = createContext();

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produtoParaRemover) => {
    const novoCarrinho = carrinho.filter(produto => produto !== produtoParaRemover);
    setCarrinho(novoCarrinho);
  };

  const value = {
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
  };

  return (
    <CarrinhoContext.Provider value={value}>{children}</CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;