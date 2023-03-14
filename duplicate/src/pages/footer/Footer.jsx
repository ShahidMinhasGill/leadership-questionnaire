import React from "react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-8 d-flex">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h3>join us</h3>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h3>contact us</h3>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h3>work with us</h3>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 col-6">
              <h3> Diversity And Inclusion</h3>
            </div>
          </div>
          <div className="col-12">
            <h2>Subsribe to our fortnightly fewsletter, The Bolt</h2>
          </div>
          <div className="col-8">
            <p>
              Jouin our mailing list to recive our fortnightly newsletter,The
              Bolt. By signing up you'll get access to free resources,
              Programmes and more. You can opt out at any time. Read More Here:
            </p>
            <a href="#">https://www.bethebusiness.com/privacy-notice/</a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4 d-flex justify-content-between">
            <div className="col-2">
              <span>Emial Address *</span>
            </div>
            <div className="col-2 text-end">
              <span>indicates required *</span>
            </div>
          </div>
          <div className="col-12 mt-1">
            <div className="Search">
              <input id="eval" type="text" placeholder="Your Email" />
            </div>
            <button>Search</button>
          </div>
          <div className="footer-end col-12 d-flex justify-content-between mt-5 mb-5 ">
            <p>
              © 2023 Be The Business. All Rights Reserved. / Terms, policies and
              notices
            </p>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
