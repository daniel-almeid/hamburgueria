import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TemaProvider } from '../contexts/TemaContext';
import LoginScreen from '../Telas/Login/LoginScreen';
import TelaPrincipal from '../Telas/Principal/TelaPrincipal';
import Configuracoes from '../Telas/Configuracao/Configuracoes';
import CarrinhoDeCompras from '../Telas/Carrinho/CarrinhoDeCompras';
import FinalizarCompra from '../Telas/Finalizar/FinalizarCompra';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <TemaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ headerShown: false }} />
          <Stack.Screen name="CarrinhoDeCompras" component={CarrinhoDeCompras} options={{ headerShown: false }} />
          <Stack.Screen name="FinalizarCompra" component={FinalizarCompra} options={{ headerShown: false }} />
          {/* Adicione outras telas aqui, se necessário */}
        </Stack.Navigator>
      </NavigationContainer>
    </TemaProvider>
  );
};

export default AppNavigator;