import React from 'react';
import { AutenticacaoProvider } from './src/contexts/AutenticacaoContext';
import { TemaProvider } from './src/contexts/TemaContext';
import { CarrinhoProvider } from './src/contexts/CarrinhoContext';
import AppNavigator from './src/navigation/AppNavigator'; 

const App = () => {
  return (
    <AutenticacaoProvider>
      <TemaProvider>
        <CarrinhoProvider>
          <AppNavigator />
        </CarrinhoProvider>
      </TemaProvider>
    </AutenticacaoProvider>
  );
};

export default App;
