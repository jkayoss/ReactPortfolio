import '../style/header.scss';
import { Menu } from '../components/Menu';
import me from '../media/me.svg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export function Header() {
    return (
      <header className="up">
        <div className="container">
          <div class="grid">
          <div>
          <Fade bottom>
          <h1><span>Olá!</span><br/>Me chamo <u>Kayo</u>.</h1>
          </Fade>
          <Fade bottom>
          <p>Sou um desenvolvedor frontend em formação.</p>
          </Fade>
          <Menu/>
          </div>
          <Flip bottom>
          <div>
          
            <img src={me} class="me" alt=""/>
          </div>
          </Flip>
          </div>
        </div>
        
        
      </header>
    );
  }
  