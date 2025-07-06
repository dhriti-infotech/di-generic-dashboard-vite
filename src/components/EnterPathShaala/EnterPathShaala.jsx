import React, { useEffect, useState } from "react";
import loadingImage from "../../assets/images/pathShaala.png"; // Update with actual path
import "./EnterPathShaala.css";
import scienceBg from "../../assets/images/science-img-bg.jpg";
import mathsBg from "../../assets/images/math-bg.avif";
import "./EnterPathShaala.css";
import ScienceTopics from "../Science/ScienceTopics";

const EnterPathShaala = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="enter-pathshaala">
        <div className="loading-screen">
          <img src={loadingImage} alt="Loading..." className="loading-image" />
        </div>
      </div>
    );
  }

  if (selectedSubject === "Science") {
    return <ScienceTopics />;
  }

  return (
    <div className="enter-pathshaala">
      <div className="main-content">
        <h2>Welcome to PathShaala!</h2>
        <div className="card-container">
          <div className="flip-card" onClick={() => setSelectedSubject("Science")}>
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${scienceBg})` }}
              >
              </div>
              <div className="flip-card-back">
                <p>Explore physics, chemistry, biology and more.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${mathsBg})` }}
              >
              </div>
              <div className="flip-card-back">
                <p>Dive into algebra, geometry, calculus and logic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPathShaala;
