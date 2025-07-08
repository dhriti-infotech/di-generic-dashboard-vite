import React, { useState } from "react";
import physicsBg from "../../../public/physics-bg.jpg";
import chemistryBg from "../../../public/chemistry.jpg";
import biologyBg from "../../../public/biology.webp";
import BiologyTopics from "../Biology/BiologyTopics";
import "./ScienceTopics.css";

const ScienceTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic === "Biology") {
    console.log("Inside Biology Selected");
    return <BiologyTopics onBack={() => setSelectedTopic(null)} />;
  }

  return (
    <div className="science-topics">
      <h2>Science Subtopics</h2>
      <div className="card-container">
        {/* Physics Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front topic-front"
              style={{ backgroundImage: `url(${physicsBg})` }}
            >
              {/* <h3>Physics</h3> */}
            </div>
            <div className="flip-card-back topic-back">
              <p>Study motion, force, energy, gravity and more.</p>
            </div>
          </div>
        </div>

        {/* Chemistry Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front topic-front"
              style={{ backgroundImage: `url(${chemistryBg})` }}
            >
              {/* <h3>Chemistry</h3> */}
            </div>
            <div className="flip-card-back topic-back">
              <p>Explore atoms, molecules, reactions and periodic table.</p>
            </div>
          </div>
        </div>

        {/* Biology Card with click */}
        <div className="flip-card" onClick={() => setSelectedTopic("Biology")}>
          <div className="flip-card-inner">
            <div
              className="flip-card-front topic-front"
              style={{ backgroundImage: `url(${biologyBg})` }}
            >
              {/* <h3>Biology</h3> */}
            </div>
            <div className="flip-card-back topic-back">
              <p>Learn about cells, DNA, ecosystems and life processes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceTopics;
