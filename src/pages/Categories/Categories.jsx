
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  { name: "Educational Toys", icon: "bi-book", color: "#dff3ff" },
  { name: "Remote Control Toys", icon: "bi-car-front", color: "#ffe3ed" },
  { name: "Soft Toys", icon: "bi-heart", color: "#fff3c8" },
  { name: "Building & Construction", icon: "bi-grid-3x3", color: "#ddf7eb" },
  { name: "Board Games", icon: "bi-dice-5", color: "#eee3ff" },
  { name: "Outdoor Toys", icon: "bi-dribbble", color: "#dff3ff" },
  { name: "Art & Craft", icon: "bi-brush", color: "#ffe3ed" },
  { name: "Dolls & Figures", icon: "bi-person-standing", color: "#ffead9" },
];

function Categories() {
  return (
    <main className="tm-page">
      <section className="tm-page-banner">
        <span>EXPLORE AND DISCOVER</span>
        <h1>Shop by Category</h1>
        <p>Find something special for every little dream.</p>
      </section>

      <section className="tm-category-page-grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="tm-category-page-card"
            style={{ "--category-color": category.color }}
          >
            <span className="tm-category-page-icon">
              <i className={`bi ${category.icon}`} />
            </span>
            <h2>{category.name}</h2>
            <span className="tm-category-explore">Explore Toys →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Categories;
