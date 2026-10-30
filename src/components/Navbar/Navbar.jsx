
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="tm-navbar">
        <div className="tm-nav-inner">
          <Link to="/" className="tm-logo">
            ToyMart
          </Link>

          <div className="tm-nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Toys</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/smart-toy-finder">Smart Toy Finder</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="tm-nav-icons">
            <Link to="/wishlist" aria-label="Wishlist">
              <i className="bi bi-heart" />
            </Link>
            <Link to="/cart" aria-label="Shopping cart">
              <i className="bi bi-cart3" />
            </Link>
            <Link to="/profile" aria-label="Profile">
              <i className="bi bi-person" />
            </Link>
            <Link to="/login" className="tm-login">
              Login
            </Link>
          </div>
        </div>
      </nav>

      
      {/* Search Bar */}
      <div className="tm-search-wrap">
        <form
          className="tm-search"
          onSubmit={(event) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            const query = formData.get("search")?.toString().trim();

            if (query) {
              window.location.href =
                "/products?search=" + encodeURIComponent(query);
            }
          }}
        >
          <i className="bi bi-search tm-search-icon" />

          <input
            name="search"
            type="search"
            placeholder="Search toys, brands and more..."
            aria-label="Search toys, brands and categories"
          />

          <button type="submit" aria-label="Search">
            <i className="bi bi-search" />
          </button>
        </form>
      </div>

    </>
  );
}

export default Navbar;
