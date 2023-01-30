import { Link } from "react-router-dom";
import logoImg from "../img/logo.svg";

export function Nav() {
  return (
    <section className="section-wrapper nav-content">
      <Link to="/">
        <img src={logoImg} alt="Little Lemon Logo" className="logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservation</a>
          </li>
          <li>
            <a href="#orderonline">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
