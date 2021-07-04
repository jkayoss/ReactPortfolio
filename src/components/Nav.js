import '../style/nav.scss';
import logo from '../media/logo.svg';
import github from '../media/github.svg';
import linkedin from '../media/linkedin.svg';
import profile from '../media/profile.jpg';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <nav>
        <div className="container">
          <div class="about">
            <h1><Link to="/"><img src={logo} /></Link></h1>
            <img src={profile} class="profilepic"/>
          </div>
          
          <ul>
              <a href="https://github.com/jkayoss"><li><img src={github} alt="link para o GitHub"/></li></a>
              <a href="https://www.linkedin.com/in/jhonatankayo/"><li><img src={linkedin} alt="link para o Linkedin"/></li></a>
          </ul>
        </div>
      </nav>
    );
  }
  