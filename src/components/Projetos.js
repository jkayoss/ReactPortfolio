import '../style/projetos.scss';
import { Menu } from './Menu';
import letmeask from '../media/letmeask.png';
import agenciafake from '../media/agenciafake.png';
import victor from '../media/victor.png';
import temfiller from '../media/filler.png';
import Fade from 'react-reveal/Fade';



export function ProjetosRealizados() {
    return (
        <section className="up">
            <div class="container">
                <h1><Fade bottom>Projetos realizados</Fade></h1>
                <p class="description"><Fade bottom>Além deste portfólio feito em ReactJS, tenho outros projetos que realizei para praticar minhas habilidades em frontend.</Fade></p>
                <Fade bottom cascade>
                    <div>
                <div class="grid">
                    <div class="card">
                        <a target="_blank" rel="noreferrer" href="https://letmeaskdb.web.app/"><div class="title"><h3>Let me ask</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3672 11.4328L10.5125 3.74766C10.4445 3.68906 10.3578 3.65625 10.2664 3.65625H8.19219C8.01875 3.65625 7.93906 3.87187 8.07031 3.98438L16.2781 11.1094H2.5625C2.45937 11.1094 2.375 11.1937 2.375 11.2969V12.7031C2.375 12.8062 2.45937 12.8906 2.5625 12.8906H16.2758L8.06797 20.0156C7.93672 20.1305 8.01641 20.3438 8.18984 20.3438H10.3344C10.3789 20.3438 10.4234 20.3273 10.4562 20.2969L19.3672 12.5672C19.4483 12.4966 19.5134 12.4095 19.558 12.3116C19.6025 12.2138 19.6256 12.1075 19.6256 12C19.6256 11.8925 19.6025 11.7862 19.558 11.6884C19.5134 11.5905 19.4483 11.5034 19.3672 11.4328Z" fill="black"/>
</svg></div>
                        

                        <img src={letmeask} alt=""/></a>
                        
                        <p>Projeto em React e Firebase feito na NLW Together da RocketSeat. Ganhei bolsa do Ignite nessa edição.</p>
                        <div class="skill"><p></p><strong>React + Firebase</strong></div>
                    </div>
                    <div class="card">
                    <a target="_blank" rel="noreferrer" href="https://victorcarneiro.com.br" ><div class="title"><h3>Victor Carneiro</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3672 11.4328L10.5125 3.74766C10.4445 3.68906 10.3578 3.65625 10.2664 3.65625H8.19219C8.01875 3.65625 7.93906 3.87187 8.07031 3.98438L16.2781 11.1094H2.5625C2.45937 11.1094 2.375 11.1937 2.375 11.2969V12.7031C2.375 12.8062 2.45937 12.8906 2.5625 12.8906H16.2758L8.06797 20.0156C7.93672 20.1305 8.01641 20.3438 8.18984 20.3438H10.3344C10.3789 20.3438 10.4234 20.3273 10.4562 20.2969L19.3672 12.5672C19.4483 12.4966 19.5134 12.4095 19.558 12.3116C19.6025 12.2138 19.6256 12.1075 19.6256 12C19.6256 11.8925 19.6025 11.7862 19.558 11.6884C19.5134 11.5905 19.4483 11.5034 19.3672 11.4328Z" fill="black"/>
</svg></div>
                        <img src={victor} alt=""/></a>
                        
                        <p>Página feita para candidato jovem a vereador de minha cidade utilizando conceitos de desenvolvimento web.</p>
                        <div class="skill"><p></p><strong>Html + Css responsivo</strong></div>
                    </div>
                    <div class="card">
                    <a target="_blank" rel="noreferrer" href="https://temfiller.netlify.app"><div class="title"><h3>Tem Filler?</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3672 11.4328L10.5125 3.74766C10.4445 3.68906 10.3578 3.65625 10.2664 3.65625H8.19219C8.01875 3.65625 7.93906 3.87187 8.07031 3.98438L16.2781 11.1094H2.5625C2.45937 11.1094 2.375 11.1937 2.375 11.2969V12.7031C2.375 12.8062 2.45937 12.8906 2.5625 12.8906H16.2758L8.06797 20.0156C7.93672 20.1305 8.01641 20.3438 8.18984 20.3438H10.3344C10.3789 20.3438 10.4234 20.3273 10.4562 20.2969L19.3672 12.5672C19.4483 12.4966 19.5134 12.4095 19.558 12.3116C19.6025 12.2138 19.6256 12.1075 19.6256 12C19.6256 11.8925 19.6025 11.7862 19.558 11.6884C19.5134 11.5905 19.4483 11.5034 19.3672 11.4328Z" fill="black"/>
</svg></div>
                        <img src={temfiller} alt=""/></a>
                        <p>Projeto feito para compreender a manipulação da árvore de elementos (DOM) no javascript.</p>
                        <div class="skill"><p></p><strong>Javascript</strong></div>
                        
                    </div>
                    <div class="card">
                    <a target="_blank" rel="noreferrer" href="https://agenciafake.netlify.app"><div class="title"><h3>Agencia Fake</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3672 11.4328L10.5125 3.74766C10.4445 3.68906 10.3578 3.65625 10.2664 3.65625H8.19219C8.01875 3.65625 7.93906 3.87187 8.07031 3.98438L16.2781 11.1094H2.5625C2.45937 11.1094 2.375 11.1937 2.375 11.2969V12.7031C2.375 12.8062 2.45937 12.8906 2.5625 12.8906H16.2758L8.06797 20.0156C7.93672 20.1305 8.01641 20.3438 8.18984 20.3438H10.3344C10.3789 20.3438 10.4234 20.3273 10.4562 20.2969L19.3672 12.5672C19.4483 12.4966 19.5134 12.4095 19.558 12.3116C19.6025 12.2138 19.6256 12.1075 19.6256 12C19.6256 11.8925 19.6025 11.7862 19.558 11.6884C19.5134 11.5905 19.4483 11.5034 19.3672 11.4328Z" fill="black"/>
</svg></div>
                        <img src={agenciafake} alt=""/></a>
                        
                        <p>Layout de agencia ficticia para pôr em prática conhecimentos em UI Design e Design Responsivo.</p>
                        <div class="skill"><p></p><strong>UI Design + Design Responsivo</strong></div>
                    </div>
                    </div></div></Fade>
                <footer class="footer">
                </footer>
                <div class="contextMenu">
                    <Menu />
                </div>
                
            </div>
        </section>
        
    );
  }