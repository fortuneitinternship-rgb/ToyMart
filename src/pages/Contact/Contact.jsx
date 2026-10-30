
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="tm-page">
      <section className="tm-page-banner">
        <span>WE ARE HERE TO HELP</span>
        <h1>Contact Us</h1>
        <p>Have a question about ToyMart? Send us a message.</p>
      </section>

      <form className="tm-finder-card" onSubmit={handleSubmit}>
        <h2>Send us a message</h2>

        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" required placeholder="Enter your name" />

        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" required placeholder="Enter your email" />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required rows="5" placeholder="How can we help?" />

        <button className="tm-page-button" type="submit">Send Message</button>

        {submitted && (
          <p className="tm-success">
            Thank you! Your message was submitted in this demo.
          </p>
        )}
      </form>
    </main>
  );
}

export default Contact;
