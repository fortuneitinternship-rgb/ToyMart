
import React, { useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      eyebrow: "Big Smiles ★ Happy Play ★ Bright Future",
      title: "Toys for Every",
      highlight: "Little Dream",
      description:
        "Explore a world of fun, learning and imagination with our handpicked toys!",
      button: "Shop Now",
    },
    {
      eyebrow: "Learn Something New Every Day",
      title: "Play, Learn",
      highlight: "And Grow",
      description:
        "Discover toys that inspire creativity, curiosity and happy childhood memories!",
      button: "Explore Toys",
    },
    {
      eyebrow: "Little Toys, Big Adventures",
      title: "Make Every",
      highlight: "Day Special",
      description:
        "Find exciting toys for every age, every interest and every little dream!",
      button: "Shop Collection",
    },
  ];

  const categories = [
    "Educational Toys",
    "Remote Control Toys",
    "Soft Toys",
    "Building & Construction",
    "Board Games",
    "Outdoor Toys",
    "Art & Craft",
    "Dolls & Figures",
  ];

  const slide = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <main>
      {/* HERO BANNER */}
      <section className="tm-hero-banner">
        <button
          className="tm-hero-arrow tm-hero-prev"
          onClick={previousSlide}
          aria-label="Previous banner"
        >
          &#8249;
        </button>

        <div className="tm-hero-content">
          {/* LEFT SIDE */}
          <div className="tm-hero-text" key={activeSlide}>
            <p className="tm-hero-eyebrow">{slide.eyebrow}</p>

            <h1 className="tm-hero-title">
              {slide.title}
              <br />
              <span>{slide.highlight}</span>
            </h1>

            <p className="tm-hero-description">
              {slide.description}
            </p>

            <button
              className="tm-hero-button"
              onClick={() => {
                window.location.href = "/products";
              }}
            >
              {slide.button} <span>→</span>
            </button>
          </div>

          {/* RIGHT SIDE: CSS TOY ILLUSTRATION */}
          <div
            className="tm-hero-visual"
            aria-label="Decorative toy display"
          >
            <div className="tm-hero-sun" />
            <div className="tm-hero-cloud tm-cloud-left" />
            <div className="tm-hero-cloud tm-cloud-right" />

            {/* Stacking rings */}
            <div className="tm-toy-stack">
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* Teddy bear made with CSS */}
            <div className="tm-hero-teddy">
              <div className="tm-teddy-ear tm-teddy-ear-left" />
              <div className="tm-teddy-ear tm-teddy-ear-right" />

              <div className="tm-teddy-head">
                <div className="tm-teddy-eye tm-teddy-eye-left" />
                <div className="tm-teddy-eye tm-teddy-eye-right" />
                <div className="tm-teddy-muzzle" />
                <div className="tm-teddy-nose" />
              </div>

              <div className="tm-teddy-body" />
              <div className="tm-teddy-bow" />

              <div className="tm-teddy-foot tm-teddy-foot-left" />
              <div className="tm-teddy-foot tm-teddy-foot-right" />
            </div>

            {/* Building blocks */}
            <div className="tm-toy-block tm-block-one" />
            <div className="tm-toy-block tm-block-two" />
            <div className="tm-toy-block tm-block-three" />

            {/* Play, Learn, Grow */}
            <div className="tm-hero-play-note">
              <span>Play</span>
              <span>Learn</span>
              <span>Grow ♥</span>
            </div>

            <span className="tm-hero-star tm-star-one">★</span>
            <span className="tm-hero-star tm-star-two">✦</span>
          </div>
        </div>

        {/* NEXT / PREVIOUS */}
        <button
          className="tm-hero-arrow tm-hero-next"
          onClick={nextSlide}
          aria-label="Next banner"
        >
          &#8250;
        </button>

        {/* SLIDE INDICATORS */}
        <div className="tm-hero-dots">
          {slides.map((item, index) => (
            <button
              key={item.button}
              className={`tm-hero-dot ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="tm-section tm-categories">
        <div className="tm-section-heading">
          <h2>⭐ Shop by Category</h2>
          <a href="/products" className="tm-view-all">
            View All Categories →
          </a>
        </div>

        <div className="tm-category-grid">
          {categories.map((category, index) => (
            <a
              href="/products"
              className="tm-category-card"
              key={category}
            >
              <div className="tm-category-icon">
                <span>{["A", "🚗", "♡", "▦", "♟", "⚽", "✎", "♙"][index]}</span>
              </div>

              <h3>{category}</h3>
            </a>
          ))}
        </div>
      </section>

       <Card
  title="Educational Toys"
  description="Make learning fun!"
/>
    </main>
  );

}


export default Home;
