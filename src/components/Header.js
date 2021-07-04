import '../style/header.scss';
import { Menu } from '../components/Menu';
import me from '../media/me.svg';

export function Header() {
    return (
      <header className="up">
        <div className="container">
          <div class="grid">
          <div>
          <h1><span>Olá!</span><br/>Me chamo <u>Kayo</u>.</h1>
          <p>Sou um desenvolvedor frontend em formação.</p>
          <Menu/>
          </div>
          <div>
            <img src={me} class="me"/>
          </div>
          </div>
        </div>
        
        
      </header>
    );
  }
  