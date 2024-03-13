import React from "react";
import "./Works.css";

import w3 from "../../Assets/w3.jpg";
import vegetablediseaseimg1 from "../../Assets/vegdisease2.jpeg";
import mentalhealthchatbotprojectimg from "../../Assets/pepper.jpeg"
import chatpic from "../../Assets/chatapplicationpic2.jpeg"
import aeroplane from "../../Assets/airlinesatpic.jpeg"
import cancerous from "../../Assets/cancerpicee.jpeg"
const Works = () => {
  return (
    <div className="works-container">
      <h1 id="portfolio-section-connect">Projects Portfolio</h1>
      <div className="works-list-container">
        <div className="works-item">
          {/* vegetable disease classification project */}
          <a href = "https://github.com/Aravsharma1"> <img src={vegetablediseaseimg1} alt="work1" /></a>
        </div>
        {/* mental health chatbot */}
        <div className="works-item">
          <a href = "https://github.com/Aravsharma1/P.E.P.P.E.R."> <img src={mentalhealthchatbotprojectimg} alt="work2" /> </a>
        </div>
        {/* cs ia */}
        <div className="works-item">
          <a href = "https://github.com/Aravsharma1/AutomatingTuitions"> <img src={w3} alt="work3" /> </a>
        </div>
        {/* cs ee */}
        <div className="works-item">
          <a href = "https://github.com/Aravsharma1/MalignantVsBenignProject"> <img src={cancerous} alt="work4" /> </a>
        </div>
        {/* uber or mern stack project - UW Connect */}
        <div className="works-item">
         <a href = "https://github.com/Aravsharma1/WarriorsConnectUW"> <img src={chatpic} alt="work5" /> </a>
        </div>
        {/* Airline Satisfaction Project */}
        <div className="works-item">
          <a href = "https://github.com/Aravsharma1/PredictingAirlineSatisfaction"> <img src={aeroplane} alt="work6" /> </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
