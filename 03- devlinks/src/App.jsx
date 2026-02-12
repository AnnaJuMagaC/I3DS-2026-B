import './App.css'
import Link from './components/Link/Link'
import LinkSocial from './components/LinkSocial/LinkSocial'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape'

function App() {

  return (
    <div id='App'>
      
      <Perfil fotoPerfil={"https:placehold.co/100"}>Anna Maga</Perfil>

      <div className='switch'>       
        <ul>
          <Link url={""}>Inscreva-se</Link>
        </ul>
        <ul>
          <Link url={""}>Minha Playlist</Link>
        </ul>
        <ul>
          <Link url={""}>Me pague uma paçoca!</Link>
        </ul>
        <ul>
          <Link url={""}>Conheça o curso DEV</Link>
        </ul>
      </div>
      <div className='links'></div>
      <div className='linksSocial'>
      <LinkSocial url={"https://github.com/"} icon={"logo-github"} />
      <LinkSocial url={"https://www.instagram.com/"} icon={"logo-instagram"} />
      <LinkSocial url={"https://www.youtube.com/"} icon={"logo-youtube"} />
      <LinkSocial url={"https://github.com/"} icon={"logo-linkedin"} />
      </div>
      
      <Rodape>NajuMagaC</Rodape>
    </div>
  )
}

export default App
