import '../style/about.scss';
import { Menu } from '../components/Menu';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

export function AboutMe() {
    return (
        <section className="up">
            <div class="container">
                
                <div class="gridAbout">
                    <div class="col">
                    <Flip bottom>
                    <div>
                    <h1><span>Olá!</span><br/>Me chamo <u>Kayo</u>.</h1>
                    </div>
                    </Flip>
                    <Flip bottom>
                    <div>
                    <p class="description">Tenho 24 anos, <br/>Trabalho com análise de processos, <br/>Formando em engenharia de produção, <br/>Estudante de frontend, <br/>Inglês intermediário.</p>   
                    </div>
                    </Flip>
                    
                    <Slide right>
                    <div>
                    <h3>Certificações:</h3>
                        <div class="certification"><p><strong>Design Responsivo</strong> pela <i>FreeCodeCamp.</i></p></div>
                        <div class="certification"><p><strong>Web Design Completo</strong> pela <i>Origamid.</i></p></div>
                    <h3>Estou aprendendo:</h3>
                        <div class="certification"><p><strong>Javascript Completo ES6</strong> pela <i>Origamid.</i></p></div>
                        <div class="certification"><p><strong>Ignite</strong> em <strong>ReactJS</strong> pela <i>RocketSeat.</i></p></div>
                    </div>
                    </Slide>
                    </div>
                    
                    <div class="col">
                        
                    </div>
                </div>

                    <footer class="footer"></footer>
                <div class="contextMenu">
                    <Menu />
                </div>
            </div>
        </section>  
    );
  }