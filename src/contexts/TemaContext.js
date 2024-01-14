import React, { createContext, useState, useContext } from 'react';

const TemaContext = createContext();

export const useTema = () => {
  return useContext(TemaContext);
};

export const TemaProvider = ({ children }) => {
  const [modoClaro, setModoClaro] = useState(false);

  const alternarModo = () => {
    setModoClaro((prevModoClaro) => !prevModoClaro);
  };

  const definirModo = (novoModo) => {
    setModoClaro(novoModo);
  };

  return (
    <TemaContext.Provider value={{ modoClaro, alternarModo, definirModo }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaContext;
