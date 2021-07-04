import '../style/menu.scss';
import { Link } from "react-router-dom";
import arrow from '../media/arrow.svg'

export function Menu() {
    return (
        <div className="info">
            <ul>
                <li> <img src={arrow} alt="seta apontando pras opções do menu inferior"/> </li>
                <li><Link to="/about">Sobre mim</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                {/* <li><Link to="/contato">Contato</Link></li> */}
            </ul>
        </div>
        
    );
  }