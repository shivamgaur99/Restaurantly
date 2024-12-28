import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css'; 

const Gallery = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.gallery-lightbox',
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {[...Array(8)].map((_, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="gallery-item">
                <a
                  href={`assets/img/gallery/gallery-${index + 1}.jpg`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`assets/img/gallery/gallery-${index + 1}.jpg`}
                    alt={`Gallery Image ${index + 1}`}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
