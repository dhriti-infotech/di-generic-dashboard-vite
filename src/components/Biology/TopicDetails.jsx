import React from "react";
import IntroductionBiology from "./Introduction/IntroductionBiology"; // Import your topic component
import "./TopicDetails.css";

const TopicDetail = ({ topic, onBack }) => {
  return (
    <div className="topic-detail animate-slide">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>{topic.title}</h2>
      <p className="level-tag">{topic.level} Level</p>

      <div className="teaching-content">
        {topic.title === "Introduction to Biology" ? (
          <IntroductionBiology />,
          <IntroductionBiology/>
        ) : (
          <p>Topic content coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;
