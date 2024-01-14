import React, { createContext, useState } from 'react';

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuarios, setUsuarios] = useState([
    {
      nome: 'Daniel',
      email: 'daniel@email.com',
      senha: '123',
      telefone: '+55 (21) 99999-9999',
      endereco: 'Rua dos Crias, 10',
    },
    {
      nome: 'Maria',
      email: 'maria@email.com',
      senha: '456',
      telefone: '+55 (21) 88888-8888',
      endereco: 'Avenida Principal, 20',
    },
    // Adicione mais usuários aqui se necessário
  ]);

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const login = async (email, senha) => {
    const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);
    if (usuarioEncontrado) {
      setUsuarioLogado(usuarioEncontrado);
      return 'ok';
    }
    return 'Email ou senha incorretos';
  };

  const logout = () => {
    setUsuarioLogado(null);
  };

  return (
    <AutenticacaoContext.Provider
      value={{
        usuarios,
        usuario: usuarioLogado,
        login,
        logout,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
}
