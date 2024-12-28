import React, { useState } from "react";

const Specials = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Specials</h2>
          <p>Discover our delicious special dishes</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column" id="specials-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab-1" ? "active show" : ""}`}
                  data-bs-toggle="tab"
                  href="#tab-1"
                  onClick={() => handleTabChange("tab-1")}
                >
                  Grilled Salmon with Lemon Butter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab-2" ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href="#tab-2"
                  onClick={() => handleTabChange("tab-2")}
                >
                  Spaghetti Carbonara
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab-3" ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href="#tab-3"
                  onClick={() => handleTabChange("tab-3")}
                >
                  Chicken Parmesan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab-4" ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href="#tab-4"
                  onClick={() => handleTabChange("tab-4")}
                >
                  Vegan Buddha Bowl
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab-5" ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href="#tab-5"
                  onClick={() => handleTabChange("tab-5")}
                >
                  Beef Wellington
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className={`tab-pane ${activeTab === "tab-1" ? "active show" : ""}`} id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Grilled Salmon with Lemon Butter</h3>
                    <p className="fst-italic">
                      A perfectly grilled salmon fillet topped with a rich lemon butter sauce.
                    </p>
                    <p>
                      Our Grilled Salmon is seasoned with fresh herbs and grilled to perfection. Paired with a velvety lemon butter sauce,
                      it’s a light yet satisfying dish that brings the best of both flavor and health.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-1.png" alt="Grilled Salmon" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${activeTab === "tab-2" ? "active show" : ""}`} id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Spaghetti Carbonara</h3>
                    <p className="fst-italic">
                      A creamy and savory Italian pasta made with pancetta, eggs, and Parmesan.
                    </p>
                    <p>
                      Spaghetti Carbonara is a classic Italian dish that’s rich in flavor and comforting to the soul. With crispy pancetta,
                      fresh eggs, and a generous amount of Parmesan cheese, this pasta is a true indulgence.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-2.png" alt="Spaghetti Carbonara" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${activeTab === "tab-3" ? "active show" : ""}`} id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Chicken Parmesan</h3>
                    <p className="fst-italic">
                      Breaded chicken cutlet topped with marinara sauce and melted mozzarella.
                    </p>
                    <p>
                      Our Chicken Parmesan is a delicious twist on an Italian classic. The chicken is tender and crispy, topped with a tangy
                      marinara sauce and gooey melted mozzarella. Served over a bed of spaghetti, it’s a hearty, comforting meal.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-3.png" alt="Chicken Parmesan" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${activeTab === "tab-4" ? "active show" : ""}`} id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Vegan Buddha Bowl</h3>
                    <p className="fst-italic">
                      A vibrant, healthy bowl of roasted vegetables, quinoa, and a tangy tahini dressing.
                    </p>
                    <p>
                      The Vegan Buddha Bowl is a nourishing dish filled with fresh, roasted vegetables, protein-packed quinoa, and a
                      creamy tahini dressing that ties everything together. It’s the perfect meal for those seeking a wholesome and flavorful
                      plant-based option.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-4.png" alt="Vegan Buddha Bowl" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${activeTab === "tab-5" ? "active show" : ""}`} id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Beef Wellington</h3>
                    <p className="fst-italic">
                      A luxurious beef tenderloin coated in mushroom duxelles, wrapped in puff pastry.
                    </p>
                    <p>
                      Beef Wellington is a show-stopping dish perfect for special occasions. The tender beef is covered in a rich mushroom
                      duxelles, wrapped in a golden puff pastry, and baked to perfection. It’s a decadent and flavorful entrée that will
                      impress any guest.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-5.png" alt="Beef Wellington" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
