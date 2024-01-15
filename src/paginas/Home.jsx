import React, { useContext } from "react";
import receitas from "../receitas";
import { ReceitaContext } from "../contexts/ReceitaContext";
import Header from "../components/Header";
import { PaginaContext } from "../contexts/PaginaContext";

function Home() {
  const { selecionarReceita } = useContext(ReceitaContext);
  const { setPaginaAtiva, PAGINAS } = useContext(PaginaContext);
  return (
    <>
      <Header />
      <div className="px-2 grid gap-8 mt-20 pb-4 sm:grid-cols-2 lg:grid-cols-3 m-auto w-fit ">
        {receitas.map((receita) => {
          return (
            <div
              className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer flex flex-col max-w-[400px]"
              key={receita.id}
              onClick={() => {
                selecionarReceita(receita.id);
                setPaginaAtiva(PAGINAS.PAGINA_RECEITA);
              }}
            >
              {/* Image */}
              <img
                className="w-full rounded-lg object-cover h-60 sm:rounded-none sm:rounded-t-lg"
                alt={receita.nome}
                src={`/fotos-receitas/${receita.img}`}
              />
              {/* Text */}
              <div className="p-3 w-full text-left flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  <span href="#">{receita.nome}</span>
                </h3>
                <div className="">
                  {receita.tags.map((tag, id) => {
                    return (
                      <span
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                        key={id}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-4 mb-2 py-2 flex flex-row font-light border-gray-500 text-gray-500 dark:text-gray-400 border-y">
                  <div className="flex flex-col text-center w-full border-r border-gray-500">
                    <span className="">
                      Dificuldade: {receita.complexidade}
                    </span>
                    <span className="">Rende: {receita.porcoes} porções</span>
                  </div>
                  <div className=" flex flex-col text-center w-full ">
                    <span className="">
                      Tempo Preparo: {receita.tempoPreparo}
                    </span>
                    <span className="">Tempo Total: {receita.tempoTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
