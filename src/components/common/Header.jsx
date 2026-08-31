

 function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          REBOOT
        </a>

        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/science">Science</a>
          <a href="/contact">Contact</a>
        </nav>

        <button className="header__button">
          Get Started
        </button>
      </div>
    </header>
  );
}
export default Header;