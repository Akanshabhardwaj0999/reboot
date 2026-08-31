import "./ui.css"
export const Blog = ()=>{
    return (
       
<section className="reboot-blog">

  <div className="reboot-container">

    <div className="reboot-blog__heading">
      <div>
        <div className="reboot-section-label">
          <span>04</span>
          FROM THE BLOG
        </div>

        <h2>
          Read. Learn.
          <span> Reboot.</span>
        </h2>
      </div>

      <a href="/blog" className="reboot-text-button">
        View all
        <span>→</span>
      </a>
    </div>


    <div className="reboot-blog__grid">

      <article className="reboot-blog-card">
        <div className="reboot-blog-card__image">
          <span>01</span>
        </div>

        <div className="reboot-blog-card__content">
          <small>WELLNESS</small>

          <h3>
            How to make your morning feel better after a late night
          </h3>

          <a href="/blog/morning-after">
            Read Article →
          </a>
        </div>
      </article>


      <article className="reboot-blog-card">
        <div className="reboot-blog-card__image reboot-blog-card__image--two">
          <span>02</span>
        </div>

        <div className="reboot-blog-card__content">
          <small>LIFESTYLE</small>

          <h3>
            Simple habits for a better morning routine
          </h3>

          <a href="/blog/morning-routine">
            Read Article →
          </a>
        </div>
      </article>


      <article className="reboot-blog-card">
        <div className="reboot-blog-card__image reboot-blog-card__image--three">
          <span>03</span>
        </div>

        <div className="reboot-blog-card__content">
          <small>REBOOT GUIDE</small>

          <h3>
            What to keep in mind after a night out
          </h3>

          <a href="/blog/night-out-guide">
            Read Article →
          </a>
        </div>
      </article>

    </div>

  </div>

</section>


    )
}