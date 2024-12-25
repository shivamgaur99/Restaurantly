import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div>
      <div>
        <div
          style={{ textAlign: "center", fontWeight: "600" }}
          className="main-txt"
        >
          <h1>
            Welcome To{" "}
            <span style={{ color: "#ffa500" }}>
              Delightful<span style={{ color: "black" }}>Plates</span>{" "}
            </span>
          </h1>
        </div>
        <div style={{ backgroundColor: " #f9f9f9" }}>
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
      <div
        style={{ textAlign: "center", fontWeight: "600" }}
        className="main-txt mt-2"
      >
        <h1>
          Know More About{" "}
          <span style={{ color: "#ffa500" }}>
            Delightful<span style={{ color: "black" }}>Plates</span>{" "}
          </span>
        </h1>
      </div>
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

            <div className="col-md-6 py-3 py-md-0">
              <p className=" text-align: center;">
                "DelightfulPlates" is a restaurant reservation system designed
                to create a seamless and enjoyable booking experience for
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
                "DelightfulPlates" focuses on enhancing customer satisfaction
                and efficiency in the dining reservation process.{" "}
              </p>
              <a href="https://en.wikipedia.org/wiki/Indian_cuisine">
                <button id="about-btn">Read More...</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
