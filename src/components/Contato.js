import '../style/contato.scss';
import { Menu } from '../components/Menu';
import Flip from 'react-reveal/Flip';

export function ContatoMe() {
    function alertSending() {
        alert('Obrigado pelo contato! Responderei assim que possivel.')       
    }
    return (
        <section className="up">
            <div class="container">
            
                <h1>Tem algum projeto frontend?</h1>
                <h2>Fala comigo ↓ </h2>
                <form action="https://send.pageclip.co/a3tL3emY0rlVgN0YPJas3aybU5fZLayW" onSubmit={alertSending} class="pageclip-form" name="contato" method="POST">
                    <Flip top cascade><input type="text" name="nome" placeholder="Informe seu nome" required/>
                    <input type="email" name="email" placeholder="Informe um e-mail" required/>
                    <input type="tel" name="telefone" placeholder="Informe um telefone" required/>
                    <textarea name="mensagem" placeholder="Como posso ajuda-lo?" required></textarea></Flip>
                    <button type="submit">Enviar mensagem</button>
                </form>
                <footer class="footer"></footer>
                <div class="contextMenu">
                    <Menu />
                </div>
                <script>
                   
                </script>
                
               
            </div>
        </section>  
    );
  }