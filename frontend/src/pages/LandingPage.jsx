
import { Link } from "react-router-dom";
import "./LandingPage.css";

const studyImage =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85";

const notesImage =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85";

const libraryImage =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85";

export default function LandingPage() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <Link to="/" className="landing-logo">
          adapt<span>iq.</span>
        </Link>

        <div className="landing-links">
          <a href="#about">Our idea</a>
          <a href="#how-it-works">How it works</a>
          <Link to="/login">Log in</Link>
          <Link to="/register" className="landing-nav-button">
            Get started <span>↗</span>
          </Link>
        </div>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-text">
            <div className="landing-label">
              <span className="landing-label-dot" />
              YOUR STUDY SPACE, REIMAGINED
            </div>

            <h1>
              There's no
              <br />
              one way to
              <br />
              <span>learn.</span>
            </h1>

            <p className="landing-description">
              Some people learn by doing. Some need to see it. Others need to
              talk it through. AdaptIQ helps you discover what works for you
              and build a study routine that feels like your own.
            </p>

            <div className="landing-hero-actions">
              <Link to="/register" className="landing-button">
                Find your learning style <span>↗</span>
              </Link>
              <a href="#how-it-works" className="landing-text-link">
                See how it works ↓
              </a>
            </div>

            <div className="landing-hero-caption">
              <span>MADE FOR REAL STUDENTS</span>
              <span>BUILT AROUND YOU</span>
            </div>
          </div>

          <div className="landing-hero-visual">
            <img
              src={studyImage}
              alt="A quiet study desk with books and notes"
            />
            <div className="landing-photo-label">
              <span className="landing-photo-number">01</span>
              <div>
                <strong>Start with yourself.</strong>
                <p>Your learning journey begins here.</p>
              </div>
            </div>
            <div className="landing-floating-note">
              <span>✳</span>
              Little steps count, too.
            </div>
          </div>

          <div className="landing-hero-side-note">
            A LITTLE LESS OVERWHELM.
            <br />
            A LITTLE MORE YOU.
          </div>
        </section>

        <section className="landing-intro" id="about">
          <div className="landing-intro-heading">
            <p className="landing-label">A NOTE FROM US</p>
            <h2>
              Studying shouldn't
              <br />
              feel like <em>guesswork.</em>
            </h2>
          </div>

          <div className="landing-intro-copy">
            <p>
              We've all had those days when we stare at the same page for an
              hour and somehow remember nothing.
            </p>
            <p>
              Maybe the method isn't right for you. Maybe you need a different
              approach, a little structure, or simply a place to get
              everything together.
            </p>
            <p>
              That's why we created AdaptIQ: to help you understand your
              learning preferences and make studying feel more manageable.
            </p>
            <a href="#how-it-works" className="landing-text-link">
              Here's how we do it <span>→</span>
            </a>
          </div>
        </section>

        <section className="landing-how" id="how-it-works">
          <div className="landing-section-heading">
            <div>
              <p className="landing-label">NOT ANOTHER COMPLICATED SYSTEM</p>
              <h2>
                Three steps.
                <br />
                <em>Your own way.</em>
              </h2>
            </div>
            <p>
              No need to have it all figured out. Just start where you are,
              and take it one step at a time.
            </p>
          </div>

          <div className="landing-steps">
            <article className="landing-step">
              <div className="landing-step-top">
                <span>01</span>
                <span className="landing-step-symbol">↘</span>
              </div>
              <h3>Get to know yourself</h3>
              <p>
                Answer a few questions about your study habits, preferences,
                and the things that help you understand new ideas.
              </p>
              <div className="landing-step-line" />
            </article>

            <article className="landing-step">
              <div className="landing-step-top">
                <span>02</span>
                <span className="landing-step-symbol">✳</span>
              </div>
              <h3>Find your approach</h3>
              <p>
                Explore a suggested study method that fits your preferences,
                along with practical ways to put it into action.
              </p>
              <div className="landing-step-line" />
            </article>

            <article className="landing-step">
              <div className="landing-step-top">
                <span>03</span>
                <span className="landing-step-symbol">↗</span>
              </div>
              <h3>Make space to learn</h3>
              <p>
                Keep your subjects and study resources together, including
                your PDFs, so you can spend more time learning.
              </p>
              <div className="landing-step-line" />
            </article>
          </div>
        </section>

        <section className="landing-method">
          <div className="landing-method-image">
            <img
              src={notesImage}
              alt="A notebook and handwritten notes ready for a study session"
              loading="lazy"
            />
            <span className="landing-image-stamp">YOUR WAY, ALWAYS.</span>
          </div>

          <div className="landing-method-content">
            <p className="landing-label">THERE IS NO ONE-SIZE-FITS-ALL</p>
            <h2>
              Find what works
              <br />
              for <em>your brain.</em>
            </h2>
            <p>
              Your friend might love flashcards. You might understand things
              better by solving problems or explaining a concept out loud.
              Neither approach has to be your only option.
            </p>
            <p>
              AdaptIQ gives you a starting point based on your preferences,
              with ideas you can try, adapt, and make your own.
            </p>
            <Link to="/register" className="landing-button">
              Let's figure it out <span>↗</span>
            </Link>
            <p className="landing-small-note">
              Think of it as a starting point, not a box to fit into.
            </p>
          </div>
        </section>

        <section className="landing-resources">
          <div className="landing-resources-copy">
            <p className="landing-label">A PLACE FOR ALL YOUR STUDY STUFF</p>
            <h2>
              Less searching.
              <br />
              More <em>learning.</em>
            </h2>
            <p>
              Your notes in one folder. Your PDFs somewhere else. That one
              important resource you can never find when you need it.
            </p>
            <p>
              Let's make things a little easier. Keep your study materials
              together and give yourself one less thing to worry about.
            </p>
            <Link to="/register" className="landing-text-link">
              Make it your study space <span>→</span>
            </Link>
          </div>

          <div className="landing-resources-image">
            <img
              src={libraryImage}
              alt="A welcoming library filled with books and natural light"
              loading="lazy"
            />
            <div className="landing-resource-note">
              <span>YOUR SPACE</span>
              <strong>Subjects, notes and PDFs.</strong>
              <p>All the things you need, together.</p>
            </div>
          </div>
        </section>

        <section className="landing-quote">
          <span className="landing-quote-mark">“</span>
          <blockquote>
            You don't have to study like everyone else.
            <br />
            You just have to find what works for you.
          </blockquote>
          <p>A LITTLE REMINDER FROM ADAPTIQ</p>
        </section>

        <section className="landing-cta">
          <div>
            <p className="landing-label">READY WHEN YOU ARE</p>
            <h2>
              Your next chapter
              <br />
              starts <em>with one step.</em>
            </h2>
            <p>
              Start getting to know the way you learn. We'll take it from
              there, together.
            </p>
          </div>
          <Link to="/register" className="landing-button landing-cta-button">
            Get started with AdaptIQ <span>↗</span>
          </Link>
          <span className="landing-cta-decoration">a + i</span>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-footer-main">
          <div>
            <Link to="/" className="landing-logo">
              adapt<span>iq.</span>
            </Link>
            <p>A little space to learn, grow, and figure things out.</p>
          </div>

          <div className="landing-footer-links">
            <a href="#about">Our idea</a>
            <a href="#how-it-works">How it works</a>
            <Link to="/login">Log in</Link>
            <Link to="/register">Get started</Link>
          </div>
        </div>

        <div className="landing-footer-bottom">
          <span>MADE FOR YOUR LEARNING JOURNEY.</span>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
