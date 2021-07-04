import { Navbar } from './components/Nav';
import { Header } from './components/Header';
import { ProjetosRealizados } from './components/Projetos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
