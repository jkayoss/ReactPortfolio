import '../style/menu.scss';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="info">
            <ul>
                <li> - </li>
                <li>Sobre mim</li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li>Contato</li>
            </ul>
        </div>
        
    );
  }