// import React, { useState } from "react";
// import TopicDetail from "./TopicDetails";
// import "./BiologyTopics.css";

// const topics = [
//   { title: "Introduction to Biology", level: "Beginner" },
//   { title: "Cell Structure & Function", level: "Beginner" },
//   { title: "Classification of Living Organisms", level: "Beginner" },
//   { title: "Nutrition in Plants and Animals", level: "Beginner" },
//   { title: "Respiration", level: "Beginner" },
//   { title: "Reproduction (Basics)", level: "Beginner" },
//   { title: "Photosynthesis", level: "Intermediate" },
//   { title: "Human Anatomy", level: "Intermediate" },
//   { title: "Genetics & Heredity", level: "Intermediate" },
//   { title: "Microorganisms", level: "Intermediate" },
//   { title: "Molecular Biology (DNA/RNA)", level: "Advanced" },
//   { title: "Evolution & Natural Selection", level: "Advanced" },
//   { title: "Biotechnology", level: "Advanced" },
//   { title: "Immunology", level: "Advanced" },
//   { title: "Assessment", level: "Begineer" },
// ];

// const BiologyTopics = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   if (selectedTopic) {
//     return <TopicDetail topic={selectedTopic} onBack={() => setSelectedTopic(null)} />;
//   }

//   return (
//     <div className="biology-topics">
//       <h2>Biology Topics</h2>
//       <div className="topics-grid">
//         {topics.map((topic, index) => (
//           <div
//             key={index}
//             className={`topic-card ${topic.level.toLowerCase()}`}
//             onClick={() => setSelectedTopic(topic)}
//           >
//             <h3>{topic.title}</h3>
//             <span className="level">{topic.level}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BiologyTopics;

import React, { useState } from "react";
import TopicDetail from "./TopicDetails";
import QuizComponent from "./QuizComponent/QuizComponent"; // 👈 Import the quiz
import DigestiveSystem from "./DigestiveSystem/DigestiveSystem";
import "./BiologyTopics.css";

const topics = [
  { title: "Introduction to Biology", level: "Beginner" },
  { title: "Cell Structure & Function", level: "Beginner" },
  { title: "Classification of Living Organisms", level: "Beginner" },
  { title: "Nutrition in Plants and Animals", level: "Beginner" },
  { title: "Respiration", level: "Beginner" },
  { title: "Reproduction (Basics)", level: "Beginner" },
  { title: "Photosynthesis", level: "Intermediate" },
  { title: "Human Anatomy", level: "Intermediate" },
  { title: "Genetics & Heredity", level: "Intermediate" },
  { title: "Microorganisms", level: "Intermediate" },
  { title: "Molecular Biology (DNA/RNA)", level: "Advanced" },
  { title: "Evolution & Natural Selection", level: "Advanced" },
  { title: "Biotechnology", level: "Advanced" },
  { title: "Immunology", level: "Advanced" },
  { title: "Assessment", level: "Beginner" },
  { title: "digestiveSystem", level: "Begineer"}
];

const BiologyTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic?.title === "Assessment") {
    return (
      <QuizComponent
        subject="Biology"
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  if (selectedTopic?.title === "digestiveSystem") {
    return (
      <DigestiveSystem
        subject="Biology"
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  if (selectedTopic) {
    return (
      <TopicDetail
        topic={selectedTopic}
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  return (
    <div className="biology-topics">
      <h2>Biology Topics</h2>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic-card ${topic.level.toLowerCase()}`}
            onClick={() => setSelectedTopic(topic)}
          >
            <h3>{topic.title}</h3>
            <span className="level">{topic.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiologyTopics;

