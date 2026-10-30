
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SmartToyFinder.css";

function SmartToyFinder() {
  const [age, setAge] = useState("3-5");
  const [budget, setBudget] = useState("500-1000");
  const [type, setType] = useState("Educational");
  const navigate = useNavigate();

  function findToys(event) {
    event.preventDefault();

    const params = new URLSearchParams({ age, budget, type });
    navigate(`/products?${params.toString()}`);
  }

  return (
    <main className="tm-page">
      <section className="tm-page-banner">
        <span>PERSONALIZED TOY SHOPPING</span>
        <h1>Smart Toy Finder</h1>
        <p>Find toys that match your child's age, interests, and budget.</p>
      </section>

      <form className="tm-finder-card" onSubmit={findToys}>
        <h2>Find the perfect toy</h2>

        <label htmlFor="toy-age">Child's age</label>
        <select id="toy-age" value={age} onChange={e => setAge(e.target.value)}>
          <option value="0-2">0–2 years</option>
          <option value="3-5">3–5 years</option>
          <option value="6-8">6–8 years</option>
          <option value="9-12">9–12 years</option>
        </select>

        <label htmlFor="toy-type">Toy category</label>
        <select id="toy-type" value={type} onChange={e => setType(e.target.value)}>
          <option>Educational</option>
          <option>Remote Control</option>
          <option>Soft Toys</option>
          <option>Building & Construction</option>
          <option>Board Games</option>
          <option>Outdoor Toys</option>
          <option>Art & Craft</option>
          <option>Dolls & Figures</option>
        </select>

        <label htmlFor="toy-budget">Budget</label>
        <select id="toy-budget" value={budget} onChange={e => setBudget(e.target.value)}>
          <option value="0-500">Under ₹500</option>
          <option value="500-1000">₹500–₹1,000</option>
          <option value="1000-2000">₹1,000–₹2,000</option>
          <option value="2000-plus">Above ₹2,000</option>
        </select>

        <button className="tm-page-button" type="submit">
          Find My Toys →
        </button>
      </form>
    </main>
  );
}

export default SmartToyFinder;
