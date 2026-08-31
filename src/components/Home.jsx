
import React from "react";
import "./ui.css";

import Reboot1 from "../../src/assets/Reboot1.png";
import Reboot2 from "../../src/assets/Reboot2.png";
import Reboot3 from "../../src/assets/Reboot3.png";

export function Home() {
  return (
    <main className="reboot-home">

      {/* ================= HERO ================= */}
      <section className="reboot-hero">
        <div className="reboot-hero__container">

          <div className="reboot-hero__content">
            <span className="reboot-label">
              INTRODUCING REBOOT
            </span>

            <h1>
              Last night was
              <span> unforgettable.</span>
              <br />
              This morning doesn't
              <span> have to be.</span>
            </h1>

            <p>
              Reboot is your post-party recovery companion,
              designed to support your body when you need
              to get back to feeling like yourself.
            </p>

            <div className="reboot-hero__buttons">
              <a
                href="https://www.amazon.in/"
                target="_blank"
                rel="noreferrer"
                className="reboot-btn reboot-btn--primary"
              >
                Shop Reboot
                <span>↗</span>
              </a>

              <a
                href="#how-it-works"
                className="reboot-btn reboot-btn--outline"
              >
                Discover More
              </a>
            </div>

            <div className="reboot-hero__trust">
              <span>✓ Easy to take</span>
              <span>✓ Everyday convenience</span>
              <span>✓ Made for recovery</span>
            </div>
          </div>


          <div className="reboot-hero__product">

            <div className="reboot-product-glow"></div>

            <div className="reboot-product-circle">
              <img
                src={Reboot1}
                alt="Reboot Capsules"
              />
            </div>

            <div className="reboot-floating-card reboot-floating-card--top">
              <strong>REBOOT</strong>
              <span>Start fresh.</span>
            </div>

            <div className="reboot-floating-card reboot-floating-card--bottom">
              <span className="reboot-check">✓</span>

              <div>
                <strong>Recovery Support</strong>
                <small>Your morning companion</small>
              </div>
            </div>

          </div>

        </div>

        <div className="reboot-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="reboot-intro">

        <div className="reboot-container">

          <div className="reboot-section-label">
            <span>01</span>
            WHY REBOOT
          </div>

          <div className="reboot-intro__content">

            <h2>
              Because the morning
              <span> matters too.</span>
            </h2>

            <p>
              Good nights shouldn't have to mean difficult mornings.
              Reboot is designed for those moments when you want
              to recover, refresh, and get back to your day.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PRODUCT ================= */}
      <section className="reboot-product">

        <div className="reboot-container">

          <div className="reboot-product__heading">

            <div>
              <div className="reboot-section-label">
                <span>02</span>
                THE REBOOT
              </div>

              <h2>
                Your night out.
                <span> Our support.</span>
              </h2>
            </div>

            <p>
              Keep Reboot close whenever you know tomorrow
              needs a little extra support.
            </p>

          </div>


          <div className="reboot-product__grid">

            <div className="reboot-product__image">

              <div className="product-image-glow"></div>

              <img
                src={Reboot2}
                alt="Reboot product"
              />

            </div>


            <div className="reboot-product__details">

              <span className="reboot-small-label">
                REBOOT CAPSULES
              </span>

              <h3>
                Reset your morning.
              </h3>

              <p>
                A convenient capsule designed to support
                recovery after a night out and help you
                get back into your routine.
              </p>

              <div className="reboot-features">

                <div>
                  <span>01</span>
                  <strong>Simple</strong>
                  <small>Easy to add to your routine.</small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Convenient</strong>
                  <small>Keep it ready when you need it.</small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Recovery focused</strong>
                  <small>Designed with your morning in mind.</small>
                </div>

              </div>

              <a
                href="https://www.amazon.in/"
                target="_blank"
                rel="noreferrer"
                className="reboot-text-button"
              >
                Get Reboot
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        className="reboot-how"
        id="how-it-works"
      >

        <div className="reboot-container">

          <div className="reboot-section-heading">

            <div className="reboot-section-label">
              <span>03</span>
              HOW IT WORKS
            </div>

            <h2>
              Three simple steps.
              <span> One better morning.</span>
            </h2>

          </div>


          <div className="reboot-steps">

            <div className="reboot-step">
              <div className="reboot-step__number">
                01
              </div>

              <div className="reboot-step__icon">
                +
              </div>

              <h3>
                Take Reboot
              </h3>

              <p>
                Follow the product directions and
                make Reboot part of your routine.
              </p>
            </div>


            <div className="reboot-step">
              <div className="reboot-step__number">
                02
              </div>

              <div className="reboot-step__icon">
                ◌
              </div>

              <h3>
                Hydrate & Rest
              </h3>

              <p>
                Give your body what it needs with
                water, rest, and a little time.
              </p>
            </div>


            <div className="reboot-step">
              <div className="reboot-step__number">
                03
              </div>

              <div className="reboot-step__icon">
                ↗
              </div>

              <h3>
                Get Back to You
              </h3>

              <p>
                Start your day and get back to
                doing what you love.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= LIFESTYLE ================= */}
      <section className="reboot-lifestyle">

        <div className="reboot-container">

          <div className="reboot-lifestyle__grid">

            <div className="reboot-lifestyle__content">

              <span className="reboot-small-label">
                FOR THE GOOD TIMES
              </span>

              <h2>
                Go out.
                <br />
                <span>Live it up.</span>
                <br />
                Reboot.
              </h2>

              <p>
                Because you shouldn't have to choose between
                enjoying the night and owning the morning.
              </p>

              <a
                href="https://www.amazon.in/"
                target="_blank"
                rel="noreferrer"
                className="reboot-btn reboot-btn--white"
              >
                Shop Now
                <span>↗</span>
              </a>

            </div>


            <div className="reboot-lifestyle__image">

              <img
                src={Reboot3}
                alt="Reboot Capsules"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= REVIEWS ================= */}
      <section className="reboot-reviews">

        <div className="reboot-container">

          <div className="reboot-section-heading">
            <div className="reboot-section-label">
              <span>04</span>
              THE REBOOT COMMUNITY
            </div>

            <h2>
              Good nights.
              <span> Better mornings.</span>
            </h2>
          </div>


          <div className="reboot-reviews__grid">

            <div className="reboot-review">
              <div className="reboot-stars">
                ★★★★★
              </div>

              <p>
                "Reboot has become something I keep ready
                whenever I know I've got a big night ahead."
              </p>

              <span>
                — Verified Customer
              </span>
            </div>


            <div className="reboot-review">
              <div className="reboot-stars">
                ★★★★★
              </div>

              <p>
                "Simple, convenient and easy to add
                to my post-party routine."
              </p>

              <span>
                — Verified Customer
              </span>
            </div>


            <div className="reboot-review">
              <div className="reboot-stars">
                ★★★★★
              </div>

              <p>
                "Definitely something I like having
                around after a late night."
              </p>

              <span>
                — Verified Customer
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="reboot-cta">

        <div className="reboot-cta__glow"></div>

        <div className="reboot-cta__content">

          <span className="reboot-small-label">
            READY TO REBOOT?
          </span>

          <h2>
            Tonight is yours.
            <br />
            <span>Tomorrow is too.</span>
          </h2>

          <p>
            Keep Reboot ready for the mornings
            that need a little extra support.
          </p>

          <a
            href="https://www.amazon.in/"
            target="_blank"
            rel="noreferrer"
            className="reboot-btn reboot-btn--white"
          >
            Buy Reboot
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}

