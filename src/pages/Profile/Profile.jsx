
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <main className="tm-page">
      <section className="tm-page-banner">
        <span>YOUR TOYMART ACCOUNT</span>
        <h1>My Profile</h1>
        <p>Manage your account and shopping preferences.</p>
      </section>

      <section className="tm-profile-card">
        <div className="tm-profile-avatar">
          <i className="bi bi-person" />
        </div>

        <h2>Welcome to ToyMart!</h2>
        <p>Sign in to access your account details and orders.</p>

        <Link to="/login" className="tm-page-button">
          Login to Your Account
        </Link>

        <div className="tm-profile-links">
          <Link to="/cart">My Cart</Link>
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/products">Browse Toys</Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
