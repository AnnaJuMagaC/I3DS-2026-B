import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {

  const [movies, setMovies] = useState([]);
  
  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB.API.KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json;

    //Alimentando a variável movies
    setMovies (data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logo da plataforma de streaming Netflix com o nome em destaque, em letras vermelhas vibrantes sobre fundo escuro, 
      representando entretenimento online."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <div className="container">
        
      </div>

      <Rodape link={"https://github.com/AnnaJuMagaC"}>Najulha</Rodape>
    </div>
    
  );
};

export default App;
