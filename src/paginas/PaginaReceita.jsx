import React, { useContext } from "react";
import Header from "../components/Header";
import { ReceitaContext } from "../contexts/ReceitaContext";

function PaginaReceita() {
  const { receitaSelecionada } = useContext(ReceitaContext);
  const receita = receitaSelecionada[0];
  const checkboxes = [];
  return (
    <div className="w-full h-full mt-20 lg:px-32 md:px-3">
      <Header />
      {/* Conteúdo */}
      <div className="">
        {/* Foto e título */}
        <div className="lg:w-[700px]  w-fill lg:m-auto">
          <img
            className="m-auto w-full max-h-96  rounded-md object-cover"
            alt={receita.nome}
            src={`/fotos-receitas/${receita.img}`}
          />
          {/* Título */}
          <div className="bg-gray-50 shadow dark:bg-gray-800 dark:border-gray-700 lg:w-[600px] m-auto lg:-top-12 relative rounded-sm border ">
            <div className="p-2">
              <h1 className="text-3xl lg:text-4xl">{receita.nome}</h1>
            </div>
            <div className="flex flex-row text-sm sm:text-md md:text-lg justify-between border-y  mb-2 mx-2 border-gray-500 ">
              <div className="flex flex-col items-center justify-center border-r  w-full m-2 border-gray-500 ">
                <span>Dificuldade: {receita.complexidade}</span>
                <span>Porções: {receita.porcoes}</span>
              </div>
              <div className="flex flex-col items-center justify-center  w-full">
                <span>Tempo total: {receita.tempoTotal}</span>
                <span>Tempo preparo: {receita.tempoPreparo}</span>
                <span>Tempo cozimento: {receita.tempoCozimento}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Ingredientes e preparo */}
        <div className="w-full mt-4  grid gap-8 sm:grid-cols-2 ">
          {/* Ingredientes */}
          <div className="pt-4 border w-full text-gray-900 dark:text-white bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit">
            <span className="text-3xl">Ingredientes</span>

            <div className="m-3 flex flex-col text-gray-700 bg-white dark:bg-gray-900  shadow-md rounded-md bg-clip-border">
              <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                {receita.ingredientes.map((ingrediente, id) => {
                  checkboxes.push(false);
                  return (
                    <div
                      role="button"
                      className={`flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-slate-800 focus:bg-slate-800  active:bg-slate-950 `}
                      //  ${
                      //   checkboxes[id] % 2 === 0 && "bg-slate-700"
                      // }
                      key={id}
                    >
                      <label
                        htmlFor={id}
                        className="flex items-center w-full px-3 py-2 cursor-pointer"
                      >
                        <div className="grid mr-3 place-items-center">
                          <div className="inline-flex items-center">
                            <label
                              className="relative flex items-center p-0 rounded-full cursor-pointer"
                              htmlFor={id}
                            >
                              <input
                                id={id}
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-8000 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                onClick={() => {
                                  checkboxes[id] = !checkboxes[id];
                                }}
                              />
                              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </label>
                          </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-900 dark:text-white">
                          {ingrediente}
                        </p>
                      </label>
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
          {/* Modo de preparo */}
          <div className="pt-4 border w-full h-fit text-gray-900 dark:text-white bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <span className="text-3xl">Modo de preparo</span>
            <div className="m-2 md:m-3  md:p-2 flex flex-col justify-between bg-white dark:bg-gray-900  shadow-md rounded-md bg-clip-border">
              {receita.passos.map((passo, id) => {
                return (
                  <div
                    className="bg-slate-800 shadow-md md:rounded-md text-left my-1 first:mt-0 last:mb-0 p-2 md:my-2 text-lg flex"
                    key={id}
                  >
                    <span className="mr-4 text-3xl text-red-500">{id + 1}</span>
                    {passo}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaReceita;
