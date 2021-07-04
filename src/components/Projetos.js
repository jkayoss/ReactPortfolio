import '../style/projetos.scss';
import { Menu } from './Menu';
import { Link } from "react-router-dom";

export function ProjetosRealizados() {
    return (
        <section>
            <div class="container">
                <h1>Projetos realizados</h1>
                <div class="contextMenu">
                    <Menu />
                </div>
                
            </div>
        </section>
        
    );
  }