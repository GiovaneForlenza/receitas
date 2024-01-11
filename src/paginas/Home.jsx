import React, { useContext } from "react";
import receitas from "../receitas";
import { ReceitaContext } from "../contexts/ReceitaContext";
import Header from "../components/Header";

function Home() {
  const { selecionarReceita } = useContext(ReceitaContext);
  return (
    <>
      <Header />
      <div className="grid gap-8 mt-20 pb-4 sm:grid-cols-2 lg:grid-cols-3 m-auto w-fit ">
        {receitas.map((receita) => {
          return (
            <div
              className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer flex flex-col max-w-[400px]"
              key={receita.id}
              onClick={() => {
                selecionarReceita(receita.id);
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
                <div className="mt-2 mb-4 flex flex-col font-light text-gray-500 dark:text-gray-400">
                  <div className="flex flex-row justify-between">
                    <span className="w-fit ">
                      Dificuldade: {receita.complexidade}
                    </span>
                    <span className="w-fit ">
                      Rendimento: {receita.porcoes} porções
                    </span>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <span className="w-fit ">
                      Tempo Preparo: {receita.tempoPreparo}
                    </span>
                    <span className="w-fit ">
                      Tempo Total: {receita.tempoTotal}
                    </span>
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
