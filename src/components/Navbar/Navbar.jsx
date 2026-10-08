import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          E-Commerce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search products..."
            />
          </form>

          <div className="d-flex gap-3">

            <Link to="/wishlist" className="text-dark fs-5">
              <i className="bi bi-heart"></i>
            </Link>

            <Link to="/cart" className="text-dark fs-5">
              <i className="bi bi-cart"></i>
            </Link>

            <Link to="/login" className="text-dark fs-5">
              <i className="bi bi-person"></i>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;