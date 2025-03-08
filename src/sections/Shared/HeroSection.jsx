import React from "react";

const HeroSection = ({ page_title }) => {
  const bgStyle = {
    backgroundImage: `url('/assets/images/bg_3.jpg')`,
  };
  return (
    <section
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={bgStyle}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="index.html">
                  Home <i className="ion-ios-arrow-forward"></i>
                </a>
              </span>{" "}
              <span>
                {page_title} <i className="ion-ios-arrow-forward"></i>
              </span>
            </p>
            <h1 className="mb-3 bread">
              {page_title == "Cars"
                ? "Choose Your Car"
                : page_title == "Blog"
                ? "Our Blog"
                : page_title == "Contact"
                ? "Contact Us"
                : page_title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
