import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO TOYMART</p>

          <h1>Play. Learn. Grow.</h1>

          <p>
            Discover fun and educational toys for every child.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>
        </div>

        {/* Image Placeholder */}
        <div className="hero-placeholder">
          <span>IMAGE PLACEHOLDER</span>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-placeholder">IMAGE</div>
            <h3>Educational Toys</h3>
            <button>Explore</button>
          </div>

          <div className="category-card">
            <div className="category-placeholder">IMAGE</div>
            <h3>Building Toys</h3>
            <button>Explore</button>
          </div>

          <div className="category-card">
            <div className="category-placeholder">IMAGE</div>
            <h3>Puzzles & Games</h3>
            <button>Explore</button>
          </div>

          <div className="category-card">
            <div className="category-placeholder">IMAGE</div>
            <h3>Outdoor Toys</h3>
            <button>Explore</button>
          </div>

        </div>
      </section>

      {/* Featured Toys */}
      <section className="featured">
        <h2>Featured Toys</h2>

        <div className="product-grid">

          <div className="product-card">
            <div className="product-placeholder">
              PRODUCT IMAGE
            </div>
            <h3>Learning Kit</h3>
            <p>₹599</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-placeholder">
              PRODUCT IMAGE
            </div>
            <h3>Building Blocks</h3>
            <p>₹799</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-placeholder">
              PRODUCT IMAGE
            </div>
            <h3>Kids Puzzle</h3>
            <p>₹449</p>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;