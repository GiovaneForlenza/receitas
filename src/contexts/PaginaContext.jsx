import React, { useState, createContext } from "react";

export const PaginaContext = createContext();
export const PaginaContextProvider = (props) => {
  const PAGINAS = [
    {
      HOME: "Home",
    },
    {
      RECEITA_ALEATORIA: "Receita Aleatória",
    },
    { PAGINA_RECEITA: "Página receita" },
  ];

  const [paginaAtiva, setPaginaAtiva] = useState(PAGINAS.HOME);

  return (
    <PaginaContext.Provider value={{ PAGINAS, paginaAtiva, setPaginaAtiva }}>
      {props.children}
    </PaginaContext.Provider>
  );
};
