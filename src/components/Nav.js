import '../style/nav.scss';
import logo from '../media/logo.svg';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <nav>
        <div className="container">
          <h1><Link to="/"><img src={logo} /></Link></h1>
          <ul>
              <li>github</li>
              <li>L.In</li>
              <li>Profile</li>
          </ul>
        </div>
      </nav>
    );
  }
  