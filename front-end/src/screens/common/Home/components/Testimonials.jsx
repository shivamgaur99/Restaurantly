import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecenas aliquam, risus at semper.',
      image: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      role: 'Ceo & Founder',
    },
    {
      quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
      image: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      role: 'Designer',
    },
    {
      quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      role: 'Store Owner',
    },
    {
      quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
      image: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      role: 'Freelancer',
    },
    {
      quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
      image: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      role: 'Entrepreneur',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What they're saying about us</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
