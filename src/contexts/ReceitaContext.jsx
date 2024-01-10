import React, { useState, createContext } from "react";
import receitas from "../receitas";

export const ReceitaContext = createContext();
export const ReceitaContextProvider = (props) => {
  const [receitaSelecionada, setReceitaSelecionada] = useState([{}]);
  const [selecionouReceita, setSelecionouReceita] = useState(false);

  function selecionarReceita(selReceita) {
    if (selReceita !== null) {
      const selecionada = receitas.filter(
        (receita) => receita.id === selReceita
      );
      if (selecionada) {
        setReceitaSelecionada(selecionada);
        setSelecionouReceita(true);
        return true;
      }
    } else {
      setReceitaSelecionada([{}]);
      setSelecionouReceita(false);
      return false;
    }
  }
  return (
    <ReceitaContext.Provider
      value={{
        selecionarReceita,
        receitaSelecionada,
        selecionouReceita,
        setSelecionouReceita,
      }}
    >
      {props.children}
    </ReceitaContext.Provider>
  );
};
