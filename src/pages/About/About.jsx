
import "./About.css";

function About() {
  return (
    <main className="tm-page">
      <section className="tm-page-banner">
        <span>WELCOME TO TOYMART</span>
        <h1>About Us</h1>
        <p>Big smiles, happy play, bright futures.</p>
      </section>

      <section className="tm-info-card">
        <h2>Making Every Playtime Special</h2>
        <p>
          ToyMart is an online toy store designed to help families discover
          toys for creativity, learning, and fun.
        </p>

        <div className="tm-info-grid">
          <article>
            <span>🎨</span>
            <h3>Creativity</h3>
            <p>Encouraging imagination through play.</p>
          </article>

          <article>
            <span>📚</span>
            <h3>Learning</h3>
            <p>Discovering new skills in enjoyable ways.</p>
          </article>

          <article>
            <span>🧸</span>
            <h3>Fun</h3>
            <p>Helping children make happy memories.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
