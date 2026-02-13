import { useState } from "react";
import "./App.css";
import Link from "./components/Link/Link";
import LinkSocial from "./components/LinkSocial/LinkSocial";
import Perfil from "./components/Perfil/Perfil";
import Rodape from "./components/Rodape/Rodape";
import Switch from "./components/Switch/Switch";

function App() {
  const[isLight,setIsLight] = useState(true);

  const troca = () => {
    setIsLight (!isLight);   
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={"https:placehold.co/100"}>Anna Maga</Perfil>

      <Switch troca={troca} isLight={isLight} />

      <div className="Link">
        <ul>
          <Link url={""}>Inscreva-se</Link>
          <Link url={""}>Minha Playlist</Link>
          <Link url={""}>Me pague uma paçoca!</Link>
          <Link url={""}>Conheça o curso DEV</Link>
        </ul>
      </div>

      <div id="LinksSocial">
        <LinkSocial url={"https://github.com/"} icon={"logo-github"} />
        <LinkSocial
          url={"https://www.instagram.com/"}
          icon={"logo-instagram"}
        />
        <LinkSocial url={"https://www.youtube.com/"} icon={"logo-youtube"} />
        <LinkSocial url={"https://github.com/"} icon={"logo-linkedin"} />
      </div>

      <Rodape>NajuMagaC</Rodape>
    </div>
  );
}

export default App;
