import { useContext } from "react";
import "./App.css";

import Home from "./paginas/Home";
import { ReceitaContext } from "./contexts/ReceitaContext";
import PaginaReceita from "./paginas/PaginaReceita";
import { PaginaContext } from "./contexts/PaginaContext";
import PaginaReceitaAleatoria from "./paginas/PaginaReceitaAleatoria";

function App() {
  const { paginaAtiva, PAGINAS } = useContext(PaginaContext);
  return (
    <div className="">
      {paginaAtiva === PAGINAS.HOME ? (
        <Home />
      ) : paginaAtiva === PAGINAS.PAGINA_RECEITA ? (
        <PaginaReceita />
      ) : (
        paginaAtiva === PAGINAS.RECEITA_ALEATORIA && <PaginaReceitaAleatoria />
      )}
    </div>
  );
}

export default App;
