import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="card-text">
          ₹{product.price}
        </p>

        <p>
          ⭐ {product.rating}
        </p>

        <div className="d-flex gap-2">

          <button className="btn btn-primary">
            Add to Cart
          </button>

          <button className="btn btn-outline-danger">
            <i className="bi bi-heart"></i>
          </button>

        </div>

        <Link
          to={`/products/${product.id}`}
          className="btn btn-link mt-2"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;