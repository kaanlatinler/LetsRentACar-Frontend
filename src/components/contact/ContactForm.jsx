import React from "react";

const ContactForm = () => {
  return (
    <form action="#" className="bg-light p-5 contact-form">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Subject" />
      </div>
      <div className="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          className="form-control"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Send Message"
          className="btn btn-primary py-3 px-5"
        />
      </div>
    </form>
  );
};

export default ContactForm;
