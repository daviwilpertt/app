import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import Contador from "./componentes/Contador/Contador";
import Diminuir from "./componentes/Diminuir/Diminuir";
import MostrarTela from "./componentes/MostrarTela/MostrarTela";
import Somar from "./componentes/Somar/Somar";

function App() {
  return (
    <>
      <span>
        <p>Exercício 1</p>
        <BotaoContador />
        <hr />
      </span>

      <span>
        <p>Exercício 2</p>
        <Contador />
        <hr />
      </span>

      <span>
        <p>Exercício 3</p>
        <MostrarTela />
        <hr />
      </span>

      <span>
        <p>Exercício 4</p>
        <Somar />
        <hr />
      </span>

      <span>
        <p>Exercício 5</p>
        <Diminuir />
        <hr />
      </span>

    </>
  );
}

export default App;
