import { useState } from "react";
import "./ui.css";

import Reboot1 from "../../src/assets/Reboot1.png";
import Reboot2 from "../../src/assets/Reboot2.png";
import Reboot3 from "../../src/assets/Reboot3.png";

export function About() {
  const images = [Reboot1, Reboot2, Reboot3];

  const [activeImage, setActiveImage] = useState(Reboot1);

  return (
    <section className="about">
      <div className="about__container">

        {/* LEFT SIDE */}
        <div className="about__content">

          <div className="about__eyebrow">
            <span></span>
            ABOUT REBOOT
          </div>

          <h2>
            We build products that make a difference.
          </h2>

          <p className="about__lead">
            Reboot is not just Hangover Relief, but a Better Way to Recover.
            It is a clinically-inspired herbal capsule designed to support your
            body after alcohol consumption and help you wake up feeling fresher
            and more in control.
          </p>

          <p>
            Reboot is made with a carefully selected blend of powerful herbs
            that support recovery after alcohol consumption. It combines Milk
            Thistle (Silymarin), Green Chiretta, Japanese Raisin Tree, Amla,
            Pomegranate, Ginger and Chicory.
          </p>

          <p>
            These ingredients are selected to support natural alcohol
            metabolism, antioxidant defense, liver function and digestion —
            creating a more complete approach to recovery.
          </p>

          <a href="contact" className="about__button">
            <span>Wants to know more about Reboot</span>
            <strong>→</strong>
          </a>

        </div>


        {/* RIGHT SIDE */}
        <div className="about__visual">

          <div className="about__circle"></div>

          <div className="about__product-wrapper">

            {/* MAIN IMAGE */}
            <div className="about__product">
              <img
                src={activeImage}
                alt="Reboot herbal ingredients"
              />
            </div>

            {/* PRODUCT LABEL */}
            <div className="about__product-label">
              <span>
                Reboot
                <br />
                <small>Support your body after Drinking.</small>
              </span>
            </div>


            {/* IMAGE THUMBNAILS */}
            <div className="about__gallery">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  className={`about__thumbnail ${
                    activeImage === image ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image}
                    alt={`Reboot product ${index + 1}`}
                  />
                </button>
              ))}
            </div>

          </div>


          {/* TOP BADGE */}
          <div className="about__badge">
            <span className="about__badge-number">7+</span>

            <span className="about__badge-text">
              POWERFUL
              <br />
              HERBS
            </span>
          </div>


          {/* BOTTOM CARD */}
          <div className="about__floating-card">

            <div className="about__floating-icon">
              ✦
            </div>

            <div>
              <strong>Powered by Nature</strong>
              <p>Carefully selected herbal ingredients</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}