

export  function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
          REBOOT
          </a>
          <p>
            Build better products and create amazing experiences.
          </p>
        </div>

        <div className="footer__links">

          <div>
            <h3>Company</h3>
            <a href="/about">About</a>
            <a href="/careers">Product</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p> 2026 Reboot. All rights reserved.</p>

        <div className="footer__socials">
          <a href="#" aria-label="Amazon">Amazon</a>
          <a href="#" aria-label="Flipkart">Flipkart</a>
        </div>
      </div>
    </footer>
  );
}

