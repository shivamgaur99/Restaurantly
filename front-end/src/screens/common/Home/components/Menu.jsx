import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    category: "starters",
    imgSrc: "assets/img/menu/lobster-bisque.jpg",
    name: "Lobster Bisque",
    price: "$5.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    id: 2,
    category: "specialty",
    imgSrc: "assets/img/menu/bread-barrel.jpg",
    name: "Bread Barrel",
    price: "$6.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    id: 3,
    category: "starters",
    imgSrc: "assets/img/menu/cake.jpg",
    name: "Crab Cake",
    price: "$7.95",
    description:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
  },
  {
    id: 4,
    category: "salads",
    imgSrc: "assets/img/menu/caesar.jpg",
    name: "Caesar Selections",
    price: "$8.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    id: 5,
    category: "specialty",
    imgSrc: "assets/img/menu/tuscan-grilled.jpg",
    name: "Tuscan Grilled",
    price: "$9.95",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
  },
  {
    id: 6,
    category: "starters",
    imgSrc: "assets/img/menu/mozzarella.jpg",
    name: "Mozzarella Stick",
    price: "$4.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    id: 7,
    category: "salads",
    imgSrc: "assets/img/menu/greek-salad.jpg",
    name: "Greek Salad",
    price: "$9.95",
    description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
  },
  {
    id: 8,
    category: "salads",
    imgSrc: "assets/img/menu/spinach-salad.jpg",
    name: "Spinach Salad",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
  },
  {
    id: 9,
    category: "specialty",
    imgSrc: "assets/img/menu/lobster-roll.jpg",
    name: "Lobster Roll",
    price: "$12.95",
    description:
      "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
  },
];

const Menu = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li
                onClick={() => handleFilterChange("all")}
                className={filter === "all" ? "filter-active" : ""}
              >
                All
              </li>
              <li
                onClick={() => handleFilterChange("starters")}
                className={filter === "starters" ? "filter-active" : ""}
              >
                Starters
              </li>
              <li
                onClick={() => handleFilterChange("salads")}
                className={filter === "salads" ? "filter-active" : ""}
              >
                Salads
              </li>
              <li
                onClick={() => handleFilterChange("specialty")}
                className={filter === "specialty" ? "filter-active" : ""}
              >
                Specialty
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-6 menu-item">
              <img src={item.imgSrc} className="menu-img" alt={item.name} />
              <div className="menu-content">
                <a href="#">{item.name}</a>
                <span>{item.price}</span>
              </div>
              <div className="menu-ingredients">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
