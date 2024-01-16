import React, { useContext } from "react";
import receitas from "../receitas";
import { ReceitaContext } from "../contexts/ReceitaContext";
import Header from "../components/Header";
import { PaginaContext } from "../contexts/PaginaContext";
import ReceitaThumbnail from "../components/ReceitaThumbnail";

function Home() {
  return (
    <>
      <Header />
      <div className="px-2 grid gap-8 mt-20 pb-4 sm:grid-cols-2 lg:grid-cols-3 m-auto w-fit ">
        {receitas.map((receita, id) => {
          return <ReceitaThumbnail receita={receita} key={id} />;
        })}
      </div>
    </>
  );
}

export default Home;
