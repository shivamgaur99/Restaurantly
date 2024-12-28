import React from 'react';

const Chefs = () => (
  <section id="chefs" className="chefs">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Chefs</h2>
        <p>Our Professional Chefs</p>
      </div>

      <div className="row">
        {[
          { name: 'Walter White', role: 'Master Chef', image: 'chefs-1.jpg' },
          { name: 'Sarah Johnson', role: 'Patissier', image: 'chefs-2.jpg' },
          { name: 'William Anderson', role: 'Cook', image: 'chefs-3.jpg' },
        ].map((chef, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="member" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
              <img
                src={`assets/img/chefs/${chef.image}`}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>{chef.name}</h4>
                  <span>{chef.role}</span>
                </div>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Chefs;