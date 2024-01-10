import React, { useContext } from "react";
import Header from "../components/Header";
import { ReceitaContext } from "../contexts/ReceitaContext";

function PaginaReceita() {
  const { receitaSelecionada } = useContext(ReceitaContext);
  const receita = receitaSelecionada[0];
  return (
    <>
      <Header />
      <div className="border">
        <img
          className="w-full rounded-lg object-cover h-60 sm:rounded-none sm:rounded-t-lg"
          alt={receita.nome}
          src={`/fotos-receitas/${receita.img}`}
        />
        <div className="dark:bg-white dark:text-black text-lg">
          {receita.nome}
        </div>
      </div>
    </>
  );
}

export default PaginaReceita;
