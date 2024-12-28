import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-md-6 py-3 py-md-0">
              <div className="card">
                <img
                  src="https://media.iceportal.com/43634/photos/65355143_XXL.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-6 py-3 py-md-0" data-aos="fade-up">
              <p className="text-align: center">
                Restauranty is a restaurant reservation system designed to
                create a seamless and enjoyable booking experience for
                customers. Through an intuitive online portal and app, customers
                can easily explore available reservation slots, choose their
                preferred date and time, and specify the size of their party.
                The system offers real-time availability updates, enabling
                customers to make informed decisions. It also allows customers
                to customize their dining experience by selecting their
                preferred seating area or table. Once a reservation is made,
                customers receive immediate confirmations and timely reminders,
                reducing no-shows. The system's integration with the
                restaurant's POS system streamlines operations, and customers
                can modify or cancel reservations as needed. Overall,
                Restauranty focuses on enhancing customer satisfaction and
                efficiency in the dining reservation process.{" "}
              </p>
              <div className="btns">
                <a
                  href="https://en.wikipedia.org/wiki/Indian_cuisine"
                  className="btn-book animated fadeInUp scrollto" target="_blank" rel="noreferrer"
                >
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div style={{ backgroundColor: " #0c0b09" }}>
          <div style={{ paddingTop: "2%" }} className="container">
            <h2
              style={{
                textAlign: "center",
                fontSize: 30,
                fontFamily: "initial",
                fontWeight: "bold",
              }}
            >
              OUR TEAM
            </h2>
            <div
              className="row display-flex justify-content:center"
              style={{ paddingTop: "4%" }}
            >
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="shivam.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Shivam Gaur</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>shivamgaur8527@gmail.com
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="tejas.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Tejas Badgujar</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>tejasbadgujar70@gmail.com
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="suruchi.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Suruchi Sonone</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>suruchisonone6@gmail.com
                </p>
              </div>
            </div>

            <div
              className="row display-flex justify-content:center"
              style={{ paddingTop: "4%" }}
            >
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="ghanshyam.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Ghanshyam Mali</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>ghanshyams.mali@gmail.com
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="saurabh.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Saurabh Ladi</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>saurabhladii@gmail.com
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12"
                style={{ textAlign: "center" }}
              >
                <img
                  className="rounded-circle"
                  src="latika.jpg"
                  width={160}
                  height={160}
                  style={{ marginBottom: 25 }}
                />
                <h3>Latika Mitkari</h3>
                <p>CDAC-Mumbai</p>
                <p>
                  <b>Email-</b>latikamitkar@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src="assets/img/about.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Committed to Excellence in Dining.</h3>
              <p className="fst-italic">
                Restaurantly focuses on delivering quality dining experiences
                paired with state-of-the-art reservation systems. Our mission is
                to combine exceptional culinary offerings with a user-friendly
                interface that streamlines the reservation process.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Easy-to-use online
                  reservation system for seamless booking.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Real-time updates and
                  notifications to reduce no-shows.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Customizable dining
                  preferences, including table selection.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Integration with
                  restaurant POS systems for operational efficiency.
                </li>
              </ul>
              <p>
                At Restaurantly, we don't just provide a meal; we offer an
                experience. From the moment you book your table to the time you
                enjoy your meal, every step is designed with you in mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Why Us</h2>
            <p>Why Choose Our Restaurant</p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta
                  veritatis dolor quod et vel dire leno para dest
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>
                  Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                  sunt debitis quo vel nam quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
