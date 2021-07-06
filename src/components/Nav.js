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
            <h1><Link to="/"><img src={logo} alt=""/></Link></h1>
            <img src={profile} alt="" class="profilepic"/>
          </div>
          
          <ul>
              <a href="https://github.com/jkayoss" rel="noreferrer" target="_blank"><li><img src={github} alt="link para o GitHub"/></li></a>
              <a href="https://www.linkedin.com/in/jhonatankayo/" rel="noreferrer" target="_blank"><li><img src={linkedin} alt="link para o Linkedin"/></li></a>
          </ul>
        </div>
      </nav>
    );
  }
  