import React, { useState } from "react";
import Header from "../components/Header";
import ReceitaThumbnail from "../components/ReceitaThumbnail";
import receitas from "../receitas";

function PaginaReceitaAleatoria() {
  const [recipeCounter, setRecipeCounter] = useState(1);
  const [randomRecipeList, setRandomRecipeList] = useState([]);

  const style = `
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }`;

  function getRandomRecipeList() {
    let count = 1;
    let randomList = [];
    do {
      let random = getRandomRecipe();
      if (
        // randomList.length > 0 &&
        (randomList.findIndex((recipe) => recipe.id === random.id) === -1 &&
          random.tags[1] === "Almoço") ||
        random.tags[1] === "Jantar"
      ) {
        randomList.push(random);
        count++;
      }
    } while (count <= recipeCounter);
    setRandomRecipeList(randomList);
  }

  function getRandomRecipe() {
    return receitas[Math.floor(Math.random() * receitas.length)];
  }

  return (
    <div>
      <Header />
      {/* container */}
      <div className="mt-20 pb-4 m-auto w-full ">
        {/* counter */}
        <div className="custom-number-input w-32 m-auto mb-6">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
            <button
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => {
                recipeCounter > 1 &&
                  setRecipeCounter((recipeCounter) => recipeCounter - 1);
              }}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={recipeCounter}
            ></input>
            <button
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              onClick={() =>
                setRecipeCounter((recipeCounter) => recipeCounter + 1)
              }
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
          <style>{style}</style>
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full  rounded-sm w-full mt-4 cursor-pointer"
            onClick={getRandomRecipeList}
          >
            <span className="m-auto text-2xl font-thin">
              Get recipe{recipeCounter > 1 && "s"}
            </span>
          </button>
        </div>

        {/* recipes */}
        <div className="px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 m-auto w-fit border">
          {randomRecipeList.length === 0
            ? "No random recipes"
            : randomRecipeList.map((receita) => {
                return <ReceitaThumbnail receita={receita} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default PaginaReceitaAleatoria;
