import React, { useState } from "react";

const QuestionSec = () => {
  const [percentage, setPercentage] = useState(0);

  const nextStep = () => {
    if (percentage === 100) return;
    setPercentage((prevPercentage) => prevPercentage + 20);
  };
  const backStep = () => {
    if (percentage === 0) return;
    setPercentage((prevPercentage) => prevPercentage - 20);
  };
  function handleChange(event) {
    if (event.target.checked) {
      nextStep();
    } else {
      backStep();
    }
  }

  return (
    <div className="">
      <div
        className="row question-sec p-2"
        style={{ borderRadius: "10px 10px 0px 0px" }}
      >
        <div className="col-3 d-flex align-items-center back-btn">
          <button onClick={nextStep}>Back</button>
        </div>
        <div className="col-8">
          <div className="col-7">
            <h3>Quistion 5 of 23</h3>
          </div>
          <ProgressBar percentage={percentage} />
        </div>

        {/* <div className="col-6">hhhh</div> */}
        {/* <div className="col-6">hhhh</div> */}
        {/* <div className="col-3">
        <button onClick={nextStep}>Next Step</button>
        </div>
        <div className="col-9  align-items-center" style={{border:'1px solid  red'}}>
        <h3>Quistion 5 of 23</h3>
          
        <ProgressBar percentage={percentage} />
        </div> */}
      </div>
      <div className="row ask-quistion d-flex justify-content-center mt-5">
        <div className="col-11 d-flex">
          
          <div className="col-8 ">
            <h2>
              Which of the following elements of digital marketing are part of
              your marketing strategy?
            </h2>
          </div>
        </div>
        <div className="col-11 mt-4">
          <h3>select all that reply</h3>
        </div>
        <div className="col-11  ">
          <div className="col-9 d-flex question-bg ">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 ">
              <h2>We don’t have a digital marketing strategy</h2>
            </div>
          </div>
        </div>
        <div className="col-11  mt-3">
          <div className="col-9 d-flex question-bg2 ">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 ">
              <h2> Company website</h2>
            </div>
          </div>
        </div>
        <div className="col-11  mt-3">
          <div className="col-9 d-flex question-bg ">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 ">
              <h2>Company app</h2>
            </div>
          </div>
        </div>
        <div className="col-11  mt-3">
          <div className="col-9 d-flex  ">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                onChange={handleChange}
                id="flexCheckChecked"
              />
            </div>
            <div className="col-6 ">
              <h2>Social media</h2>
            </div>
          </div>
        </div>
        <div className="col-11  mt-3">
          <div className="col-9 d-flex question-bg ">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 ">
              <h2>Other (e.g. search engine optimisation)</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row question-sec mt-5 p-3"
        style={{ borderRadius: "0px 0 10px 15px" }}
      >
        <div className="col-1 d-flex align-items-center back-btn">
          <button>Next</button>
        </div>
        <div className="col-2 d-flex align-items-center">
          <h3>5 questions remaining</h3>
        </div>

        {/* <div className="col-6">hhhh</div> */}
        {/* <div className="col-6">hhhh</div> */}
        {/* <div className="col-3">
        <button                 onChange={handleChange}
>Next Step</button>
        </div>
        <div className="col-9  align-items-center" style={{border:'1px solid  red'}}>
        <h3>Quistion 5 of 23</h3>
          
        <ProgressBar percentage={percentage} />
        </div> */}
      </div>
      {/* <h2> A React Progress Bar </h2> */}

      {/* <div style={{ marginTop: '20px' }}>
        <button onClick={nextStep}>Next Step</button>
      </div> */}

      {/* <div
        style={{ marginTop: '10px', color: 'blue', marginBottom: '15px' }}
        onClick={backStep}
      >
        <button>Back</button>
      </div> */}
    </div>
  );
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default QuestionSec;
