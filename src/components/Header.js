import '../style/header.scss';
import { Menu } from '../components/Menu';

export function Header() {
    return (
      <header>
        <div className="container">
          <h1><span>Olá!</span><br/>Me chamo <u>Kayo</u>.</h1>
          <p>Sou um desenvolvedor frontend em formação.</p>
          <Menu/>
        </div>
        
        
      </header>
    );
  }
  