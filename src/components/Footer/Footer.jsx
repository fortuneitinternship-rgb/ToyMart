import "./Footer.css";
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <footer className="tm-footer bg-dark text-white "></footer>
      <div className="container py-5">

        <div className="row">

          <div className="col-md-3">
            <h5>About</h5>
            <p>
              Your trusted online shopping destination.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Products</p>
            <p>Cart</p>
          </div>

          <div className="col-md-3">
            <h5>Customer Service</h5>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Returns</p>
          </div>

          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>

            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 E-Commerce. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;