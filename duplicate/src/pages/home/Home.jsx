import React from "react";
import QuestionSec from "./components/QuestionSec";

export default function Home() {
  return (
    <div className=" home">
      <div className="container">
        <div className="row top-section">

          <div className="col-2">
            <button>Back to Home</button>
          </div>
          <div className="col-12">
            <h2>Digital skills audit</h2>
            <div className="col-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                porttitor massa. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Nullam rhoncus vel massa et viverra.
              </p>
          </div>
          </div>
        </div>
        <div className="col-12" >
        <QuestionSec />
        </div>
      </div>
      <div className="container-fluid">
      </div>
    </div>
  );
}
