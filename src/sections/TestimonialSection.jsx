import React from "react";

const TestimonialSection = () => {
  const testimonialData = [
    {
      position: "Marketing Manager",
      image: "/assets/images/person_1.jpg",
    },
    {
      position: "Interface Designer",
      image: "/assets/images/person_2.jpg",
    },
    {
      position: "UI Designer",
      image: "/assets/images/person_3.jpg",
    },
    {
      position: "Web Developer",
      image: "/assets/images/person_1.jpg",
    },
    {
      position: "System Analyst",
      image: "/assets/images/person_1.jpg",
    },
  ];

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              {testimonialData &&
                testimonialData.map((testimonial, index) => (
                  <div key={index} className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(${testimonial.image})`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Roger Scott</p>
                        <span className="position">{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
