import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const events = [
  {
    title: 'Birthday Parties',
    image: 'assets/img/event-birthday.jpg',
    price: 189,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    title: 'Private Parties',
    image: 'assets/img/event-private.jpg',
    price: 290,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    title: 'Custom Parties',
    image: 'assets/img/event-custom.jpg',
    price: 99,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
];

const Events = () => {
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Organize Your Events in our Restaurant</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="events-slider"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={event.image} className="img-fluid" alt={event.title} />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{event.title}</h3>
                  <div className="price">
                    <p>
                      <span>${event.price}</span>
                    </p>
                  </div>
                  <p className="fst-italic">{event.description}</p>
                  <ul>
                    {event.list.map((item, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circled"></i> {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
