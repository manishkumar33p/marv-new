import { useState } from "react";
import "./Electronics.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";
import image13 from "../assets/13.png";
import image14 from "../assets/14.png";
import Navbar from "../Navbar/Navbar";

// Fixed products array with unique IDs
const products = [
  {
    id: 1,
    name: "Dell 180W Big Pin Charger",
    category: "Charger",
    price: 800.0,
    image: image1,
  },
  {
    id: 2,
    name: "Dell Type-C 90W",
    category: "Charger",
    price: 800.0,
    image: image2,
  },
  {
    id: 3,
    name: "HP Blue Pin 120W",
    category: "Charger",
    price: 750.0,
    image: image3,
  },
  {
    id: 4,
    name: "Lenovo USB 90W",
    category: "Charger",
    price: 450.0,
    image: image4,
  },
  {
    id: 5,
    name: "Lenovo USB 65W",
    category: "Charger",
    price: 400.0,
    image: image5,
  },
  {
    id: 6,
    name: "Dell 65W Small Pin",
    category: "Charger",
    price: 430.0,
    image: image6,
  },
  {
    id: 7,
    name: "Dell Type C 65WD",
    category: "Charger",
    price: 700.0,
    image: image7,
  },
  {
    id: 8,
    name: "Power Cable",
    category: "Power Cable",
    price: 60.0,
    image: image8,
  },
  {
    id: 9,
    name: "Dell 65W Big Pin",
    category: "Charger",
    price: 450.0,
    image: image9,
  },
  {
    id: 10,
    name: "HP Blue 65W",
    category: "Charger",
    price: 450.0,
    image: image10,
  },
  {
    id: 11,
    name: "HP Blue Pin 150W",
    category: "Charger",
    price: 800.0,
    image: image11,
  },
  {
    id: 12,
    name: "Dell 240W Big Pin",
    category: "Charger",
    price: 700.0,
    image: image12,
  },
  {
    id: 13,
    name: "Lenovo Type C 65W",
    category: "Charger",
    price: 700.0,
    image: image13,
  },
  {
    id: 14,
    name: "HP Type C 65W",
    category: "Charger",
    price: 700.0,
    image: image14,
  },
];

const categories = ["All", "Charger", "Power Cable"];

function Electronics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Navbar></Navbar>
      <h1>Product Search</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
            </div>
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">₹{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
