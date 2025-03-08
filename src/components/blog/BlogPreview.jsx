import React from "react";

const BlogPreview = () => {
  const bgStyle = {
    backgroundImage: `url('/assets/images/image_1.jpg')`,
  };

  return (
    <div className="col-md-12 text-center d-flex ftco-animate">
      <div className="blog-entry justify-content-end mb-md-5">
        <a href="blog-single.html" className="block-20 img" style={bgStyle}></a>
        <div className="text px-md-5 pt-4">
          <div className="meta mb-3">
            <div>
              <a href="#">Oct. 29, 2019</a>
            </div>
            <div>
              <a href="#">Admin</a>
            </div>
            <div>
              <a href="#" className="meta-chat">
                <span className="icon-chat"></span> 3
              </a>
            </div>
          </div>
          <h3 className="heading mt-2">
            <a href="#">Why Lead Generation is Key for Business Growth</a>
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            <a href="blog-single.html" className="btn btn-primary">
              Continue <span className="icon-long-arrow-right"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
