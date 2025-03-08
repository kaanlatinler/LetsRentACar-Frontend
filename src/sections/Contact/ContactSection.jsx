import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import React from "react";

const ContactSection = () => {
  return (
    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-4">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mr-3">
                    <span className="icon-map-o"></span>
                  </div>
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mr-3">
                    <span className="icon-mobile-phone"></span>
                  </div>
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mr-3">
                    <span className="icon-envelope-o"></span>
                  </div>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 block-9 mb-md-5">
            <ContactForm />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
