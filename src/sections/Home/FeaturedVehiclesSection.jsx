import React from "react";

const FeaturedVehiclesSection = () => {
  const vehicleImages = [
    "/assets/images/car-1.jpg",
    "/assets/images/car-2.jpg",
    "/assets/images/car-3.jpg",
    "/assets/images/car-4.jpg",
  ];
  return (
    <section className="ftco-section ftco-no-pt bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">What we offer</span>
            <h2 className="mb-2">Feeatured Vehicles</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel-car owl-carousel">
              {vehicleImages &&
                vehicleImages.map((image, index) => (
                  <div key={index} className="item">
                    <div className="car-wrap rounded ftco-animate">
                      <div
                        className="img rounded d-flex align-items-end"
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                      <div className="text">
                        <h2 className="mb-0">
                          <a href="#">Mercedes Grand Sedan</a>
                        </h2>
                        <div className="d-flex mb-3">
                          <span className="cat">Cheverolet</span>
                          <p className="price ml-auto">
                            $500 <span>/day</span>
                          </p>
                        </div>
                        <p className="d-flex mb-0 d-block">
                          <a href="#" className="btn btn-primary py-2 mr-1">
                            Book now
                          </a>{" "}
                          <a href="#" className="btn btn-secondary py-2 ml-1">
                            Details
                          </a>
                        </p>
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

export default FeaturedVehiclesSection;
