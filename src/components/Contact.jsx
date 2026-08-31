

import "./ui.css";

export function Contact() {
  return (
    <main className="contact">

      {/* HERO */}
      <section className="contact__hero">
        <div className="contact__hero-content">
          <span className="contact__eyebrow">
            <span></span>
            GET IN TOUCH
          </span>

          <h1>
            Let’s talk about
            <br />
            <em>Reboot.</em>
          </h1>

          <p>
            Have a question about Reboot, your order, or our herbal recovery
            formula? We’re here to help.
          </p>
        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact__section">
        <div className="contact__container">

          {/* LEFT */}
          <div className="contact__info">

            <div className="contact__info-header">
              <span className="contact__eyebrow">
                <span></span>
                CONTACT US
              </span>

              <h2>
                We’d love to
                <br />
                <em>hear from you.</em>
              </h2>

              <p>
                Whether you want to know more about our ingredients, need help
                with an order, or simply have a question, drop us a message.
              </p>
            </div>


            {/* CONTACT CARDS */}
            <div className="contact__details">

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:info@dharmanis.com">
                    info@dharmanis.com
                  </a>
                </div>
              </div>


              <div className="contact__detail">
                <div className="contact__detail-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+919318422676">
                    +91 93184 22676
                  </a>
                </div>
              </div>


              <div className="contact__detail">
                <div className="contact__detail-icon">
                  📍
                </div>

                <div>
                  <span>Location</span>
                  <p>
                    Gurugram, Haryana
                    <br />
                    India - 122001
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT FORM */}
          <div className="contact__form-wrapper">

            <form className="contact__form">

              <div className="contact__form-title">
                <h3>Send us a message</h3>
                <p>
                  Fill in the details below and our team will get back to you.
                </p>
              </div>


              <div className="contact__row">

                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>


                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </div>

              </div>


              <div className="contact__field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>


              <div className="contact__field">
                <label htmlFor="subject">Subject</label>

                <select id="subject" name="subject">
                  <option value="">Select a subject</option>
                  <option value="product">Product Information</option>
                  <option value="order">Order Support</option>
                  <option value="ingredients">Ingredients</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>


              <div className="contact__field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>


              <button type="submit" className="contact__button">
                <span>Send Message</span>
                <strong>→</strong>
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* BOTTOM CTA */}
      <section className="contact__cta">
        <div className="contact__cta-content">

          <span>REBOOT</span>

          <h2>
            Better recovery.
            <br />
            <em>Better tomorrow.</em>
          </h2>

          <a href="/product" className="contact__cta-button">
            Discover Reboot
            <span>→</span>
          </a>

        </div>
      </section>

    </main>
  );
}

