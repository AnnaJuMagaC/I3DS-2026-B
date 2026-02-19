import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logo da plataforma de streaming Netflix com o nome em destaque, em letras vermelhas vibrantes sobre fundo escuro, 
      representando entretenimento online."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <Rodape>Najulha</Rodape>
    </div>
    
  );
};

export default App;
