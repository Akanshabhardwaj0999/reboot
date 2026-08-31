import { Link } from "react-router-dom";

 function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          REBOOT
        </a>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/science">Science</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="header__button">
          Get Started
        </button>
      </div>
    </header>
  );
}
export default Header;