import { Navbar } from './components/Nav';
import { Header } from './components/Header';
import { AboutMe } from './components/About';
import { ContatoMe } from './components/Contato';
import { ProjetosRealizados } from './components/Projetos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export function Home() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/projetos">
              <Projetos />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contato">
              <Contato />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <>
    
    <Header />
    
    </>
  );
}

function Projetos() {
  return (
    <>
    
    <ProjetosRealizados />
    
    </>
  );
}

function About() {
  return (
    <>
    
    <AboutMe />
    
    </>
  );
}

function Contato() {
  return (
    <>
    
    <ContatoMe />
    
    </>
  );
}
