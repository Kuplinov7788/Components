import React from "react";
import yulduz from "../assets/yulduz.png";
import bgimg from "../assets/bg.jpg";

const Islom = () => {
  return (
    <div className="main">
      <div className="section">
        <div className="card">
          <div className="stars">
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
          </div>
          <p className="text">
            The application process was easy, and the loan officer was great at
            communicating the next steps. The whole process, from the
            application to the funding, took two weeks. My interest rate, as
            well as my monthly payments, went down.
          </p>
          <p className="name">Amina</p>
          <p className="date">November 18, 2022</p>
        </div>

        <div className="card">
          <div className="stars">
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
          </div>
          <p className="text">
            We wanted to refinance our vehicle because our old lender kept
            making mistakes and providing poor service. Not only did Caribou
            provide excellent service, but they helped us lower our rate, term
            and payment! What a nice surprise and a great experience!
          </p>
          <p className="name">Jessie</p>
          <p className="date">October 25, 2022</p>
        </div>

        <div className="card">
          <div className="stars">
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
            <img src={yulduz} alt="yulduz" />
          </div>
          <p className="text">
            The refi experience with Caribou was quick and easy. Fill out a form
            online, get an email and call within a few days, and boom, new low
            car payment in a couple of weeks. They did all the heavy lifting,
            were pleasant, helpful, and informative.
          </p>
          <p className="name">Danny</p>
          <p className="date">September 28, 2022</p>
        </div>
      </div>

      <div className="jonka">
        <img src={bgimg} alt="bg" className="bg" />
        <div className="gap">
          <h2>No hidden fees.</h2>
          <h2>Co-borrowers welcome.</h2>
          <h2>Fully online process.</h2>
          <p>Got more questions? We've got answers.</p>
          <button>Search our FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default Islom;
