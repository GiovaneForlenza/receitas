import { useContext } from "react";
import "./App.css";

import Home from "./paginas/Home";
import { ReceitaContext } from "./contexts/ReceitaContext";
import PaginaReceita from "./paginas/PaginaReceita";

function App() {
  const { selecionouReceita } = useContext(ReceitaContext);
  return <>{!selecionouReceita ? <Home /> : <PaginaReceita />}</>;
}

export default App;
