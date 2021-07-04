import '../style/contato.scss';
import { Link } from "react-router-dom";
import { Menu } from '../components/Menu';

export function ContatoMe() {
    return (
        <section>
            <div class="container">
            
                <h1>Tem algum projeto frontend?</h1>
                <h2>Fala comigo ↓ </h2>
                <form action="/" name="contato" method="POST" netlify>
                    <input type="text" name="nome" placeholder="Informe seu nome"/>
                    <input type="email" name="email" placeholder="Informe um e-mail"/>
                    <input type="tel" name="telefone" placeholder="Informe um telefone"/>
                    <textarea name="mensagem" placeholder="Como posso ajuda-lo?"></textarea>
                    <button type="submit" >Enviar mensagem</button>
                </form>
                <footer class="footer"></footer>
                <div class="contextMenu">
                    <Menu />
                </div>
                
               
            </div>
        </section>  
    );
  }